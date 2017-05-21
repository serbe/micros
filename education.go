package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listEducations(c echo.Context) error {
	educations, err := db.GetEducationListAll()
	if err != nil {
		log.Println("educationList GetEducationList ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":      "List",
		"educations": educations,
	})
}

func getEducation(c echo.Context) error {
	id := toInt(c.Param("id"))
	education, err := db.GetEducation(id)
	if err != nil {
		log.Println("educationEdit db.GetEducation ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":     "Create education",
		"education": education,
	})
}

func createEducation(c echo.Context) error {
	var education edc.Education
	err := c.Bind(&education)
	if err != nil {
		return err
	}
	_, err = db.CreateEducation(education)
	return err
}

func updateEducation(c echo.Context) error {
	var education edc.Education
	err := c.Bind(&education)
	if err != nil {
		return err
	}
	return db.UpdateEducation(education)
}

func deleteEducation(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeleteEducation(id)
}
