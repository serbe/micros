package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listScopes(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title  string          `json:"title"`
		Scopes []edc.ScopeList `json:"scopes"`
	}
	scopes, err := db.GetScopeListAll()
	if err != nil {
		log.Println("scopeList edb.GetScopeList ", err)
		return
	}
	ctx := context{Title: "List", Scopes: scopes}
	render.DefaultResponder(w, r, ctx)
}

func getScope(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string    `json:"title"`
		Scope edc.Scope `json:"scope"`
	}
	id := toInt(chi.URLParam(r, "id"))
	scope, err := db.GetScope(id)
	if err != nil {
		log.Println("getScope edb.GetScope ", err)
		return
	}
	ctx := context{Title: "Create scope", Scope: scope}
	render.DefaultResponder(w, r, ctx)
}

func createScope(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var scope edc.Scope
	_ = decoder.Decode(&scope)
	defer r.Body.Close()
	db.CreateScope(scope)
	return
}

func updateScope(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var scope edc.Scope
	_ = decoder.Decode(&scope)
	defer r.Body.Close()
	db.UpdateScope(scope)
	return
}

func deleteScope(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteScope(id)
	return
}
