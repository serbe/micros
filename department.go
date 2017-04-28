package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listDepartments(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title       string               `json:"title"`
		Departments []edc.DepartmentList `json:"departments"`
	}
	departments, err := db.GetDepartmentListAll()
	if err != nil {
		log.Println("departmentList edb.GetDepartmentList ", err)
		return
	}
	ctx := context{Title: "List", Departments: departments}
	render.DefaultResponder(w, r, ctx)
}

func getDepartment(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title      string         `json:"title"`
		Department edc.Department `json:"department"`
	}
	id := toInt(chi.URLParam(r, "id"))
	department, err := db.GetDepartment(id)
	if err != nil {
		log.Println("getDepartment edb.GetDepartment ", err)
		return
	}
	ctx := context{Title: "Create department", Department: department}
	render.DefaultResponder(w, r, ctx)
}

func createDepartment(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var department edc.Department
	_ = decoder.Decode(&department)
	defer r.Body.Close()
	db.CreateDepartment(department)
	return
}

func updateDepartment(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var department edc.Department
	_ = decoder.Decode(&department)
	defer r.Body.Close()
	db.UpdateDepartment(department)
	return
}

func deleteDepartment(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteDepartment(id)
	return
}
