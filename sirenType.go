package main

import (
	"encoding/json"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
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

func createSirenType(w http.ResponseWriter, r *http.Request) {
	var sirenType edc.SirenType
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createSirenType Decode", decoder.Decode(&sirenType))
	defer func() {
		errchkmsg("createSirenType defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateSirenType(sirenType)
	errchkmsg("createSirenType CreateSirenType", err)
	return
}

func updateSirenType(w http.ResponseWriter, r *http.Request) {
	var sirenType edc.SirenType
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateSirenType Decode", decoder.Decode(&sirenType))
	defer func() {
		errchkmsg("updateSirenType defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateSirenType UpdateSirenType", db.UpdateSirenType(sirenType))
	return
}

func deleteSirenType(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteSirenType DeleteSirenType", db.DeleteSirenType(id))
	return
}
