package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listPractices(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string             `json:"title"`
		Practices []edc.PracticeList `json:"practices"`
	}
	practices, err := db.GetPracticeListAll()
	if err != nil {
		errmsg("listPractices GetPracticeListAll", err)
		return
	}
	ctx := context{Title: "List", Practices: practices}
	render.DefaultResponder(w, r, ctx)
}

func listPracticesNear(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string             `json:"title"`
		Practices []edc.PracticeList `json:"practices"`
	}
	practices, err := db.GetPracticeNear()
	if err != nil {
		errmsg("listPracticesNear GetPracticeNear", err)
		return
	}
	ctx := context{Title: "List", Practices: practices}
	render.DefaultResponder(w, r, ctx)
}

func getPractice(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string           `json:"title"`
		Practice  edc.Practice     `json:"practice"`
		Companies []edc.SelectItem `json:"companies"`
		Kinds     []edc.SelectItem `json:"kinds"`
	}
	id := toInt(chi.URLParam(r, "id"))
	practice, err := db.GetPractice(id)
	if err != nil {
		errmsg("getPractice GetPractice", err)
		return
	}
	companies, err := db.GetCompanySelectAll()
	if err != nil {
		errmsg("getPractice GetCompanySelectAll", err)
		return
	}
	kinds, err := db.GetKindSelectAll()
	if err != nil {
		errmsg("getPractice GetKindSelectAll", err)
		return
	}
	ctx := context{
		Title:     "Create practice",
		Practice:  practice,
		Companies: companies,
		Kinds:     kinds,
	}
	render.DefaultResponder(w, r, ctx)
}

func createPractice(w http.ResponseWriter, r *http.Request) {
	var practice edc.Practice
	errchkmsg("createPractice Decode", json.NewDecoder(r.Body).Decode(&practice))
	_, err := db.CreatePractice(practice)
	errchkmsg("createPractice CreatePractice", err)
	r.Body.Close()
}

func updatePractice(w http.ResponseWriter, r *http.Request) {
	var practice edc.Practice
	errchkmsg("updatePractice Decode", json.NewDecoder(r.Body).Decode(&practice))
	errchkmsg("updatePractice UpdatePractice", db.UpdatePractice(practice))
	r.Body.Close()
}

func deletePractice(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deletePractice DeletePractice", db.DeletePractice(id))
}
