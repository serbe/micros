package main

import (
	"encoding/json"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listSiren(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title  string          `json:"title"`
		Sirens []edc.SirenList `json:"sirens"`
	}
	sirens, err := db.GetSirenListAll()
	if err != nil {
		errmsg("listSirens GetSirenListAll", err)
		return
	}
	ctx := context{Title: "List", Sirens: sirens}
	render.DefaultResponder(w, r, ctx)
}

func getSiren(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string    `json:"title"`
		Siren edc.Siren `json:"siren"`
	}
	id := toInt(chi.URLParam(r, "id"))
	siren, err := db.GetSiren(id)
	if err != nil {
		errmsg("getSiren GetSiren", err)
		return
	}
	ctx := context{Title: "Create siren type", Siren: siren}
	render.DefaultResponder(w, r, ctx)
}

func createSiren(w http.ResponseWriter, r *http.Request) {
	var siren edc.Siren
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createSiren Decode", decoder.Decode(&siren))
	defer func() {
		errchkmsg("createSiren defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateSiren(siren)
	errchkmsg("createSiren CreateSiren", err)
	return
}

func updateSiren(w http.ResponseWriter, r *http.Request) {
	var siren edc.Siren
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateSiren Decode", decoder.Decode(&siren))
	defer func() {
		errchkmsg("updateSiren defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateSiren UpdateSiren", db.UpdateSiren(siren))
	return
}

func deleteSiren(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteSiren DeleteSiren", db.DeleteSiren(id))
	return
}
