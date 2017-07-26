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

func createScope(w http.ResponseWriter, r *http.Request) {
	var scope edc.Scope
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createScope Decode", decoder.Decode(&scope))
	defer func() {
		errchkmsg("createScope defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateScope(scope)
	errmsg("createScope CreateScope", err)
}

func updateScope(w http.ResponseWriter, r *http.Request) {
	var scope edc.Scope
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateScope decoder.Decode", decoder.Decode(&scope))
	defer func() {
		errchkmsg("updateScope defer Body.Close", r.Body.Close())
	}()
	errmsg("updateScope UpdateScope", db.UpdateScope(scope))
}

func deleteScope(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteScope", db.DeleteScope(id))
}
