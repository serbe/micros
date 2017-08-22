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
		Title      string              `json:"title"`
		Educations []edc.EducationList `json:"educations"`
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
	ctx := context{Title: "Create education", Education: education, Contacts: contacts, Posts: posts}
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
