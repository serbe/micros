package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listScopes(c echo.Context) error {
	scopes, err := db.GetScopeListAll()
	if err != nil {
		log.Println("scopeList edb.GetScopeList ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":  "List",
		"scopes": scopes,
	})
}

func getScope(c echo.Context) error {
	id := toInt(c.Param("id"))
	scope, err := db.GetScope(id)
	if err != nil {
		log.Println("getScope edb.GetScope ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title": "Create scope",
		"scope": scope,
	})
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
