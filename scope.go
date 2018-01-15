package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listScopes(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title  string          `json:"title"`
		Scopes []edc.ScopeList `json:"scopes"`
	}
	scopes, err := db.GetScopeListAll()
	if err != nil {
		errmsg("listScopes GetScopeListAll", err)
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
		errmsg("getScope GetScope", err)
		return
	}
	ctx := context{Title: "Create scope", Scope: scope}
	render.DefaultResponder(w, r, ctx)
}

func createScope(_ http.ResponseWriter, r *http.Request) {
	var scope edc.Scope
	errchkmsg("createScope Decode", json.NewDecoder(r.Body).Decode(&scope))
	_, err := db.CreateScope(scope)
	errmsg("createScope CreateScope", err)
	r.Body.Close()
}

func updateScope(_ http.ResponseWriter, r *http.Request) {
	var scope edc.Scope
	errchkmsg("updateScope Decode", json.NewDecoder(r.Body).Decode(&scope))
	errmsg("updateScope UpdateScope", db.UpdateScope(scope))
	r.Body.Close()
}

func deleteScope(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteScope", db.DeleteScope(id))
}
