package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listCertificates(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title        string                `json:"title"`
		Certificates []edc.CertificateList `json:"certificates"`
	}
	certificates, err := db.GetCertificateListAll()
	if err != nil {
		errmsg("listCertificates GetCertificateListAll", err)
		return
	}
	ctx := context{Title: "List", Certificates: certificates}
	render.DefaultResponder(w, r, ctx)
}

func getCertificate(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title       string           `json:"title"`
		Certificate edc.Certificate  `json:"certificate"`
		Contacts    []edc.SelectItem `json:"contacts"`
		Companies   []edc.SelectItem `json:"companies"`
	}
	id := toInt(chi.URLParam(r, "id"))
	certificate, err := db.GetCertificate(id)
	if err != nil {
		errmsg("getCertificate GetCertificate", err)
	}
	contacts, err := db.GetContactSelectAll()
	if err != nil {
		errmsg("getCertificate GetContactSelectAll", err)
	}
	companies, err := db.GetCompanySelectAll()
	if err != nil {
		errmsg("getCertificate GetCompaniesSelectAll", err)
	}
	ctx := context{
		Title:       "Create certificate",
		Certificate: certificate,
		Contacts:    contacts,
		Companies:   companies,
	}
	render.DefaultResponder(w, r, ctx)
}

func createCertificate(_ http.ResponseWriter, r *http.Request) {
	var certificate edc.Certificate
	errchkmsg(
		"createCertificate Decode",
		json.NewDecoder(r.Body).Decode(&certificate),
	)
	_, err := db.CreateCertificate(certificate)
	errchkmsg("createCertificate CreateCertificate", err)
	errchkmsg("createCertificate CloseBody", r.Body.Close())
}

func updateCertificate(_ http.ResponseWriter, r *http.Request) {
	var certificate edc.Certificate
	errchkmsg(
		"updateCertificate Decode",
		json.NewDecoder(r.Body).Decode(&certificate),
	)
	errchkmsg(
		"updateCertificate UpdateCertificate",
		db.UpdateCertificate(certificate),
	)
	errchkmsg("updateCertificate CloseBody", r.Body.Close())
}

func deleteCertificate(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg(
		"deleteCertificate DeleteCertificate",
		db.DeleteCertificate(id),
	)
}
