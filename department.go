package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listDepartments(c echo.Context) error {
	departments, err := db.GetDepartmentListAll()
	if err != nil {
		log.Println("departmentList edb.GetDepartmentList ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":       "List",
		"departments": departments,
	})
}

func getDepartment(c echo.Context) error {
	id := toInt(c.Param("id"))
	department, err := db.GetDepartment(id)
	if err != nil {
		log.Println("getDepartment edb.GetDepartment ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":      "Create department",
		"department": department,
	})
}

func createDepartment(c echo.Context) error {
	var department edc.Department
	err := c.Bind(&department)
	if err != nil {
		return err
	}
	_, err = db.CreateDepartment(department)
	return err
}

func updateDepartment(c echo.Context) error {
	var department edc.Department
	err := c.Bind(&department)
	if err != nil {
		return err
	}
	return db.UpdateDepartment(department)
}

func deleteDepartment(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeleteDepartment(id)
}
