package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listEducations(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title      string          `json:"title"`
		Educations []edc.Education `json:"educations"`
	}
	educations, err := db.GetEducationList()
	if err != nil {
		log.Println("educationList GetEducationList ", err)
		return
	}
	ctx := context{Title: "List", Educations: educations}
	render.DefaultResponder(w, r, ctx)
}

func getEducation(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string        `json:"title"`
		Education edc.Education `json:"education"`
	}
	id := toInt(chi.URLParam(r, "id"))
	education, err := db.GetEducation(id)
	if err != nil {
		log.Println("educationEdit db.GetEducation ", err)
		return
	}
	ctx := context{Title: "Create education", Education: education}
	render.DefaultResponder(w, r, ctx)
}

func createEducation(w http.ResponseWriter, r *http.Request) {
	education := educationParseEditForm(w, r)
	db.CreateEducation(education)
}

func updateEducation(w http.ResponseWriter, r *http.Request) {
	education := educationParseEditForm(w, r)
	db.UpdateEducation(education)
}

func deleteEducation(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteEducation(id)
}

func educationParseEditForm(w http.ResponseWriter, r *http.Request) (education edc.Education) {
	r.ParseForm()
	if id, err := strconv.ParseInt(r.FormValue("education-id"), 10, 64); err == nil {
		education.ID = id
	} else {
		education.ID = 0
	}
	education.StartDate = r.FormValue("education-start-date")
	education.EndDate = r.FormValue("education-end-date")
	education.Note = r.FormValue("education-note")
	return
}
