package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listPractices(c echo.Context) error {
	practices, err := db.GetPracticeListAll()
	if err != nil {
		log.Println("practiceList GetPracticeList ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":     "List",
		"practices": practices,
	})
}

func getPractice(c echo.Context) error {
	id := toInt(c.Param("id"))
	practice, err := db.GetPractice(id)
	if err != nil {
		log.Println("getPractice GetPractice ", err)
		return err
	}
	companies, err := db.GetCompanySelectAll()
	if err != nil {
		log.Println("getPractice GetCompanySelectAll ", err)
		return err
	}
	kinds, err := db.GetKindSelectAll()
	if err != nil {
		log.Println("getPractice GetKindSelectAll ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":     "Create practice",
		"practice":  practice,
		"companies": companies,
		"kinds":     kinds,
	})
}

func createPractice(c echo.Context) error {
	var practice edc.Practice
	err := c.Bind(&practice)
	if err != nil {
		return err
	}
	_, err = db.CreatePractice(practice)
	return err
}

func updatePractice(c echo.Context) error {
	var practice edc.Practice
	err := c.Bind(&practice)
	if err != nil {
		return err
	}
	return db.UpdatePractice(practice)
}

func deletePractice(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeletePractice(id)
}
