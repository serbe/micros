package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listKinds(c echo.Context) error {
	type context struct {
		Title string         `json:"title"`
		Kinds []edc.KindList `json:"kinds"`
	}
	kinds, err := db.GetKindListAll()
	if err != nil {
		log.Println("kindList edb.GetKindList ", err)
		return err
	}
	ctx := context{Title: "List", Kinds: kinds}
	return c.JSON(http.StatusOK, ctx)
}

func getKind(c echo.Context) error {
	type context struct {
		Title string   `json:"title"`
		Kind  edc.Kind `json:"kind"`
	}
	id := toInt(c.Param("id"))
	kind, err := db.GetKind(id)
	if err != nil {
		log.Println("getKind edb.GetKind ", err)
		return err
	}
	ctx := context{Title: "Create kind", Kind: kind}
	return c.JSON(http.StatusOK, ctx)
}

func createKind(c echo.Context) error {
	var kind edc.Kind
	err := c.Bind(&kind)
	if err != nil {
		return err
	}
	_, err = db.CreateKind(kind)
	return err
}

func updateKind(c echo.Context) error {
	var kind edc.Kind
	err := c.Bind(&kind)
	if err != nil {
		return err
	}
	return db.UpdateKind(kind)
}

func deleteKind(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeleteKind(id)
}
