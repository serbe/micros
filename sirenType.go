package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listSirenTypes(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title      string              `json:"title"`
		SirenTypes []edc.SirenTypeList `json:"siren_types"`
	}
	sirenTypes, err := db.GetSirenTypeListAll()
	if err != nil {
		errmsg("listSirenTypes GetSirenTypeListAll", err)
		return
	}
	ctx := context{Title: "List", SirenTypes: sirenTypes}
	render.DefaultResponder(w, r, ctx)
}

func getSirenType(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string        `json:"title"`
		SirenType edc.SirenType `json:"siren_type"`
	}
	id := toInt(chi.URLParam(r, "id"))
	sirenType, err := db.GetSirenType(id)
	if err != nil {
		errmsg("getSirenType GetSirenType", err)
		return
	}
	ctx := context{Title: "Create siren type", SirenType: sirenType}
	render.DefaultResponder(w, r, ctx)
}

func createSirenType(_ http.ResponseWriter, r *http.Request) {
	var sirenType edc.SirenType
	errchkmsg("createSirenType Decode", json.NewDecoder(r.Body).Decode(&sirenType))
	_, err := db.CreateSirenType(sirenType)
	errchkmsg("createSirenType CreateSirenType", err)
	r.Body.Close()
}

func updateSirenType(_ http.ResponseWriter, r *http.Request) {
	var sirenType edc.SirenType
	errchkmsg("updateSirenType Decode", json.NewDecoder(r.Body).Decode(&sirenType))
	errchkmsg("updateSirenType UpdateSirenType", db.UpdateSirenType(sirenType))
	r.Body.Close()
}

func deleteSirenType(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteSirenType DeleteSirenType", db.DeleteSirenType(id))
}
