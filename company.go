package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listCompanies(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string            `json:"title"`
		Companies []edc.CompanyList `json:"companies"`
	}
	companyes, err := db.GetCompanyList()
	if err != nil {
		errmsg("listCompanies GetCompanyList", err)
		return
	}
	ctx := context{Title: "List company", Companies: companyes}
	render.DefaultResponder(w, r, ctx)
}

func getCompany(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title   string           `json:"title"`
		Company edc.Company      `json:"company"`
		Scopes  []edc.SelectItem `json:"scopes"`
	}
	id := toInt(chi.URLParam(r, "id"))
	company, err := db.GetCompany(id)
	if err != nil {
		errmsg("getCompany GetCompany", err)
		return
	}
	scopes, err := db.GetScopeSelectAll()
	if err != nil {
		errmsg("getCompany GetScopeSelectAll", err)
		return
	}
	ctx := context{Title: "Get company", Company: company, Scopes: scopes}
	render.DefaultResponder(w, r, ctx)
}

func createCompany(_ http.ResponseWriter, r *http.Request) {
	var company edc.Company
	errchkmsg("createCompany Decode", json.NewDecoder(r.Body).Decode(&company))
	_, err := db.CreateCompany(company)
	errchkmsg("createCompany CreateCompany", err)
	r.Body.Close()
}

func updateCompany(_ http.ResponseWriter, r *http.Request) {
	var company edc.Company
	errchkmsg("updateCompany Decode", json.NewDecoder(r.Body).Decode(&company))
	errchkmsg("updateCompany UpdateCompany", db.UpdateCompany(company))
	r.Body.Close()
}

func deleteCompany(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteCompany DeleteCompany", db.DeleteCompany(id))
}
