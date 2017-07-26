package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listKinds(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string         `json:"title"`
		Kinds []edc.KindList `json:"kinds"`
	}
	kinds, err := db.GetKindListAll()
	if err != nil {
		errmsg("listKinds GetKindListAll", err)
		return
	}
	ctx := context{Title: "List", Kinds: kinds}
	render.DefaultResponder(w, r, ctx)
}

func getKind(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string   `json:"title"`
		Kind  edc.Kind `json:"kind"`
	}
	id := toInt(chi.URLParam(r, "id"))
	kind, err := db.GetKind(id)
	if err != nil {
		errmsg("getKind GetKind", err)
		return
	}
	ctx := context{Title: "Create kind", Kind: kind}
	render.DefaultResponder(w, r, ctx)
}

func createKind(w http.ResponseWriter, r *http.Request) {
	var kind edc.Kind
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createKind Decode", decoder.Decode(&kind))
	defer func() {
		errchkmsg("createKind defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateKind(kind)
	errchkmsg("createKind CreateKind", err)
}

func updateKind(w http.ResponseWriter, r *http.Request) {
	var kind edc.Kind
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateKind Decode", decoder.Decode(&kind))
	defer func() {
		errchkmsg("updateKind defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateKind UpdateKind", db.UpdateKind(kind))
}

func deleteKind(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteKind DeleteKind", db.DeleteKind(id))
}
