package main

import (
	"encoding/json"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
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

func createCompany(w http.ResponseWriter, r *http.Request) {
	var company edc.Company
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createCompany Decode", decoder.Decode(&company))
	defer func() {
		errchkmsg("createCompany defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateCompany(company)
	errchkmsg("createCompany CreateCompany", err)
}

func updateCompany(w http.ResponseWriter, r *http.Request) {
	var company edc.Company
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateCompany Decode", decoder.Decode(&company))
	defer func() {
		errchkmsg("updateCompany defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateCompany UpdateCompany", db.UpdateCompany(company))
}

func deleteCompany(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteCompany DeleteCompany", db.DeleteCompany(id))
}
