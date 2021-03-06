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

func createKind(_ http.ResponseWriter, r *http.Request) {
	var kind edc.Kind
	errchkmsg("createKind Decode", json.NewDecoder(r.Body).Decode(&kind))
	_, err := db.CreateKind(kind)
	errchkmsg("createKind CreateKind", err)
	errchkmsg("createKind CloseBody", r.Body.Close())
}

func updateKind(_ http.ResponseWriter, r *http.Request) {
	var kind edc.Kind
	errchkmsg("updateKind Decode", json.NewDecoder(r.Body).Decode(&kind))
	errchkmsg("updateKind UpdateKind", db.UpdateKind(kind))
	errchkmsg("updateKind CloseBody", r.Body.Close())
}

func deleteKind(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteKind DeleteKind", db.DeleteKind(id))
}
