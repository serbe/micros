package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listCompanies(c echo.Context) error {
	companyes, err := db.GetCompanyList()
	if err != nil {
		log.Println("listCompanies db.GetCompanyList ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":     "List company",
		"companies": companyes,
	})
}

func getCompany(c echo.Context) error {
	id := toInt(c.Param("id"))
	company, err := db.GetCompany(id)
	if err != nil {
		log.Println("getCompany db.GetCompany", err)
		return err
	}
	scopes, err := db.GetScopeSelectAll()
	if err != nil {
		log.Println("getCompany GetScopeSelectAll", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":   "Get company",
		"company": company,
		"scopes":  scopes,
	})
}

func createCompany(c echo.Context) error {
	var company edc.Company
	err := c.Bind(&company)
	if err != nil {
		return err
	}
	_, err = db.CreateCompany(company)
	return err
}

func updateCompany(c echo.Context) error {
	var company edc.Company
	err := c.Bind(&company)
	if err != nil {
		return err
	}
	err = db.UpdateCompany(company)
	return err
}

func deleteCompany(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeleteCompany(id)
}
