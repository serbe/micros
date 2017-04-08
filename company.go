package main

import (
	"encoding/json"
	"log"
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
		log.Println("listCompanies db.GetCompanyList ", err)
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
		log.Println("getCompany db.GetCompany", err)
		return
	}
	scopes, err := db.GetScopeSelectAll()
	if err != nil {
		log.Println("getCompany GetScopeSelectAll", err)
		return
	}
	ctx := context{Title: "Get company", Company: company, Scopes: scopes}
	render.DefaultResponder(w, r, ctx)
}

func createCompany(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var company edc.Company
	_ = decoder.Decode(&company)
	defer r.Body.Close()
	db.CreateCompany(company)
}

func updateCompany(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var company edc.Company
	_ = decoder.Decode(&company)
	defer r.Body.Close()
	db.UpdateCompany(company)
}

func deleteCompany(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteCompany(id)
}
