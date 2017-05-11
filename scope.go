package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listScopes(c echo.Context) error {
	type context struct {
		Title  string          `json:"title"`
		Scopes []edc.ScopeList `json:"scopes"`
	}
	scopes, err := db.GetScopeListAll()
	if err != nil {
		log.Println("scopeList edb.GetScopeList ", err)
		return err
	}
	ctx := context{Title: "List", Scopes: scopes}
	return c.JSON(http.StatusOK, ctx)
}

func getScope(c echo.Context) error {
	type context struct {
		Title string    `json:"title"`
		Scope edc.Scope `json:"scope"`
	}
	id := toInt(c.Param("id"))
	scope, err := db.GetScope(id)
	if err != nil {
		log.Println("getScope edb.GetScope ", err)
		return err
	}
	ctx := context{Title: "Create scope", Scope: scope}
	return c.JSON(http.StatusOK, ctx)
}

func createScope(c echo.Context) error {
	var scope edc.Scope
	err := c.Bind(&scope)
	if err != nil {
		return err
	}
	_, err = db.CreateScope(scope)
	return err
}

func updateScope(c echo.Context) error {
	var scope edc.Scope
	err := c.Bind(&scope)
	if err != nil {
		return err
	}
	return db.UpdateScope(scope)
}

func deleteScope(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeleteScope(id)
}
