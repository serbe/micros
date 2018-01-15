package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listDepartments(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title       string               `json:"title"`
		Departments []edc.DepartmentList `json:"departments"`
	}
	departments, err := db.GetDepartmentListAll()
	if err != nil {
		errmsg("listDepartments GetDepartmentListAll", err)
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
		errmsg("getDepartment GetDepartment", err)
		return
	}
	ctx := context{Title: "Create department", Department: department}
	render.DefaultResponder(w, r, ctx)
}

func createDepartment(_ http.ResponseWriter, r *http.Request) {
	var department edc.Department
	errchkmsg("createDepartment Decode", json.NewDecoder(r.Body).Decode(&department))
	_, err := db.CreateDepartment(department)
	errchkmsg("createDepartment CreateDepartment", err)
	r.Body.Close()
}

func updateDepartment(_ http.ResponseWriter, r *http.Request) {
	var department edc.Department
	errchkmsg("updateDepartment Decode", json.NewDecoder(r.Body).Decode(&department))
	errchkmsg("updateDepartment UpdateDepartment", db.UpdateDepartment(department))
	r.Body.Close()
}

func deleteDepartment(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteDepartment DeleteDepartment", db.DeleteDepartment(id))
}
