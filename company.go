package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listCompanies(c echo.Context) error {
	type context struct {
		Title     string            `json:"title"`
		Companies []edc.CompanyList `json:"companies"`
	}
	companyes, err := db.GetCompanyList()
	if err != nil {
		log.Println("listCompanies db.GetCompanyList ", err)
		return err
	}
	ctx := context{Title: "List company", Companies: companyes}
	return c.JSON(http.StatusOK, ctx)
}

func getCompany(c echo.Context) error {
	type context struct {
		Title   string           `json:"title"`
		Company edc.Company      `json:"company"`
		Scopes  []edc.SelectItem `json:"scopes"`
	}
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
	ctx := context{Title: "Get company", Company: company, Scopes: scopes}
	return c.JSON(http.StatusOK, ctx)
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
