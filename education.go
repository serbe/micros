package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listEducations(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title      string              `json:"title"`
		Educations []edc.EducationList `json:"educations"`
	}
	educations, err := db.GetEducationListAll()
	if err != nil {
		errmsg("listEducations GetEducationListAll", err)
		return
	}
	ctx := context{Title: "List", Educations: educations}
	render.DefaultResponder(w, r, ctx)
}

func listEducationsNear(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title      string               `json:"title"`
		Educations []edc.EducationShort `json:"educations"`
	}
	educations, err := db.GetEducationNear()
	if err != nil {
		errmsg("lisEducationsNear GetEducationNear", err)
		return
	}
	ctx := context{Title: "List", Educations: educations}
	render.DefaultResponder(w, r, ctx)
}

func getEducation(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string           `json:"title"`
		Education edc.Education    `json:"education"`
		Contacts  []edc.SelectItem `json:"contacts"`
		Posts     []edc.SelectItem `json:"posts"`
	}
	id := toInt(chi.URLParam(r, "id"))
	education, err := db.GetEducation(id)
	if err != nil {
		errmsg("educationEdit GetEducation", err)
		return
	}
	contacts, err := db.GetContactSelectAll()
	if err != nil {
		errmsg("getEducation GetContactSelectAll", err)
		return
	}
	posts, err := db.GetPostSelectAll(true)
	if err != nil {
		errmsg("getEducation GetPostSelectAll", err)
		return
	}
	ctx := context{
		Title:     "Create education",
		Education: education,
		Contacts:  contacts,
		Posts:     posts,
	}
	render.DefaultResponder(w, r, ctx)
}

func createEducation(_ http.ResponseWriter, r *http.Request) {
	var education edc.Education
	errchkmsg("createEducation Decode", json.NewDecoder(r.Body).Decode(&education))
	_, err := db.CreateEducation(education)
	errchkmsg("createEducation CreateEducation", err)
	errchkmsg("createEducation CloseBody", r.Body.Close())
}

func updateEducation(_ http.ResponseWriter, r *http.Request) {
	var education edc.Education
	errchkmsg("updateEducation Decode", json.NewDecoder(r.Body).Decode(&education))
	errchkmsg("updateEducation UpdateEducation", db.UpdateEducation(education))
	errchkmsg("updateEducation CloseBody", r.Body.Close())
}

func deleteEducation(_ http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteEducation DeleteEducation", db.DeleteEducation(id))
}
