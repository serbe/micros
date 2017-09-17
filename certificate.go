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
	}
	id := toInt(chi.URLParam(r, "id"))
	certificate, err := db.GetCertificate(id)
	if err != nil {
		errmsg("getCertificate GetCertificate", err)
		// return
	}
	contacts, err := db.GetContactSelectAll()
	if err != nil {
		errmsg("getCertificate GetContactSelectAll", err)
		// return
	}
	ctx := context{Title: "Create certificate", Certificate: certificate, Contacts: contacts}
	render.DefaultResponder(w, r, ctx)
}

func createCertificate(w http.ResponseWriter, r *http.Request) {
	var certificate edc.Certificate
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createCertificate Decode", decoder.Decode(&certificate))
	defer func() {
		errchkmsg("createCertificate defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateCertificate(certificate)
	errchkmsg("createCertificate CreateCertificate", err)
}

func updateCertificate(w http.ResponseWriter, r *http.Request) {
	var certificate edc.Certificate
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateCertificate Decode", decoder.Decode(&certificate))
	defer func() {
		errchkmsg("updateCertificate defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateCertificate UpdateCertificate", db.UpdateCertificate(certificate))
}

func deleteCertificate(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteCertificate DeleteCertificate", db.DeleteCertificate(id))
}
