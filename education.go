package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listEducations(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title      string              `json:"title"`
		Educations []edc.EducationList `json:"educations"`
	}
	educations, err := db.GetEducationListAll()
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
	decoder := json.NewDecoder(r.Body)
	var education edc.Education
	_ = decoder.Decode(&education)
	defer r.Body.Close()
	db.CreateEducation(education)
}

func updateEducation(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var education edc.Education
	_ = decoder.Decode(&education)
	defer r.Body.Close()
	db.UpdateEducation(education)
}

func deleteEducation(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteEducation(id)
}
