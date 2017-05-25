package main

import (
	"encoding/json"
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
		errmsg("listEducations GetEducationListAll", err)
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
		errmsg("educationEdit GetEducation", err)
		return
	}
	ctx := context{Title: "Create education", Education: education}
	render.DefaultResponder(w, r, ctx)
}

func createEducation(w http.ResponseWriter, r *http.Request) {
	var education edc.Education
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createEducation Decode", decoder.Decode(&education))
	defer func() {
		errchkmsg("createEducation defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateEducation(education)
	errchkmsg("createEducation CreateEducation", err)
}

func updateEducation(w http.ResponseWriter, r *http.Request) {
	var education edc.Education
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateEducation Decode", decoder.Decode(&education))
	defer func() {
		errchkmsg("updateEducation defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateEducation UpdateEducation", db.UpdateEducation(education))
}

func deleteEducation(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteEducation DeleteEducation", db.DeleteEducation(id))
}
