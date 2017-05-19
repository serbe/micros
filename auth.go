package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
)

func login(c echo.Context) error {
	type auth struct {
		Name     string `json:"username"`
		Password string `json:"password"`
	}
	var data auth
	type context struct {
		Title string `json:"title"`
		Data  auth   `json:"data"`
	}
	data.Name = c.QueryParam("username")
	data.Password = c.QueryParam("password")
	log.Println(data)
	ctx := context{Title: "Auth", Data: data}
	return c.JSON(http.StatusOK, ctx)
}
