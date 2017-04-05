package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listScopes(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title  string      `json:"title"`
		Scopes []edc.Scope `json:"scopes"`
	}
	scopes, err := db.GetScopeList()
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
	scope := scopeParseEditForm(w, r)
	db.CreateScope(scope)
	return
}

func updateScope(w http.ResponseWriter, r *http.Request) {
	scope := scopeParseEditForm(w, r)
	db.UpdateScope(scope)
	return
}

func deleteScope(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteScope(id)
	return
}

func scopeParseEditForm(w http.ResponseWriter, r *http.Request) (scope edc.Scope) {
	r.ParseForm()
	if id, err := strconv.ParseInt(r.FormValue("scope-id"), 10, 64); err == nil {
		scope.ID = id
	} else {
		scope.ID = 0
	}
	scope.Name = r.FormValue("scope-name")
	scope.Note = r.FormValue("scope-note")
	return
}
