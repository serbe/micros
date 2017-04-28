package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listKinds(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string         `json:"title"`
		Kinds []edc.KindList `json:"kinds"`
	}
	kinds, err := db.GetKindListAll()
	if err != nil {
		log.Println("kindList edb.GetKindList ", err)
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
		log.Println("getKind edb.GetKind ", err)
		return
	}
	ctx := context{Title: "Create kind", Kind: kind}
	render.DefaultResponder(w, r, ctx)
}

func createKind(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var kind edc.Kind
	_ = decoder.Decode(&kind)
	defer r.Body.Close()
	db.CreateKind(kind)
	return
}

func updateKind(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var kind edc.Kind
	_ = decoder.Decode(&kind)
	defer r.Body.Close()
	db.UpdateKind(kind)
	return
}

func deleteKind(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteKind(id)
	return
}
