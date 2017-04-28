package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listPractices(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string             `json:"title"`
		Practices []edc.PracticeList `json:"practices"`
	}
	practices, err := db.GetPracticeListAll()
	if err != nil {
		log.Println("practiceList GetPracticeList ", err)
		return
	}
	ctx := context{Title: "List", Practices: practices}
	render.DefaultResponder(w, r, ctx)
}

func getPractice(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title    string       `json:"title"`
		Practice edc.Practice `json:"practice"`
	}
	id := toInt(chi.URLParam(r, "id"))
	practice, err := db.GetPractice(id)
	if err != nil {
		log.Println("practiceEdit db.GetPractice ", err)
		return
	}
	ctx := context{Title: "Create practice", Practice: practice}
	render.DefaultResponder(w, r, ctx)
}

func createPractice(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var practice edc.Practice
	_ = decoder.Decode(&practice)
	defer r.Body.Close()
	db.CreatePractice(practice)
}

func updatePractice(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var practice edc.Practice
	_ = decoder.Decode(&practice)
	defer r.Body.Close()
	db.UpdatePractice(practice)
}

func deletePractice(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeletePractice(id)
}
