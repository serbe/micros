package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listSiren(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title  string          `json:"title"`
		Sirens []edc.SirenList `json:"sirens"`
	}
	sirens, err := db.GetSirenList()
	if err != nil {
		errmsg("listSirens GetSirenList", err)
		return
	}
	ctx := context{Title: "List", Sirens: sirens}
	render.DefaultResponder(w, r, ctx)
}

func getSiren(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title      string           `json:"title"`
		Siren      edc.Siren        `json:"siren"`
		Contacts   []edc.SelectItem `json:"contacts"`
		Companies  []edc.SelectItem `json:"companies"`
		SirenTypes []edc.SelectItem `json:"siren_types"`
	}
	id := toInt(chi.URLParam(r, "id"))
	siren, err := db.GetSiren(id)
	if err != nil {
		errmsg("getSiren GetSiren", err)
		return
	}
	contacts, err := db.GetContactSelectAll()
	if err != nil {
		errmsg("getSiren GetContactSelectAll", err)
		return
	}
	companies, err := db.GetCompanySelectAll()
	if err != nil {
		errmsg("getSiren GetCompanySelectAll", err)
		return
	}
	sirenTypes, err := db.GetSirenTypeSelectAll()
	if err != nil {
		errmsg("getSiren GetSirenTypeSelectAll", err)
		return
	}
	ctx := context{
		Title:      "Create siren type",
		Siren:      siren,
		Contacts:   contacts,
		Companies:  companies,
		SirenTypes: sirenTypes,
	}
	render.DefaultResponder(w, r, ctx)
}

func createSiren(_ http.ResponseWriter, r *http.Request) {
	var siren edc.Siren
	errchkmsg("createSiren Decode", json.NewDecoder(r.Body).Decode(&siren))
	log.Println(siren)
	_, err := db.CreateSiren(siren)
	errchkmsg("createSiren CreateSiren", err)
	errchkmsg("createSiren CloseBody", r.Body.Close())
}

func updateSiren(_ http.ResponseWriter, r *http.Request) {
	var siren edc.Siren
	errchkmsg("updateSiren Decode", json.NewDecoder(r.Body).Decode(&siren))
	log.Println(siren)
	errchkmsg("updateSiren UpdateSiren", db.UpdateSiren(siren))
	errchkmsg("updateSiren CloseBody", r.Body.Close())
}

func deleteSiren(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteSiren DeleteSiren", db.DeleteSiren(id))
}
