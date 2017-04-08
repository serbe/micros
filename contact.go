package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listContacts(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title    string            `json:"title"`
		Contacts []edc.ContactList `json:"contacts"`
	}
	contacts, err := db.GetContactList()
	if err != nil {
		log.Println("listContacts GetContactList ", err)
		return
	}
	ctx := context{Title: "List", Contacts: contacts}
	render.DefaultResponder(w, r, ctx)
}

func getContact(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title       string           `json:"title"`
		Contact     edc.Contact      `json:"contact"`
		Companies   []edc.SelectItem `json:"companies"`
		Departments []edc.SelectItem `json:"departments"`
		Posts       []edc.SelectItem `json:"posts"`
		PostsGO     []edc.SelectItem `json:"posts_go"`
		Ranks       []edc.SelectItem `json:"ranks"`
	}
	id := toInt(chi.URLParam(r, "id"))
	contact, err := db.GetContact(id)
	if err != nil {
		log.Println("getContact GetContact ", err)
		return
	}
	companies, err := db.GetCompanySelectAll()
	if err != nil {
		log.Println("getContact GetCompanySelect ", err)
		return
	}
	departments, err := db.GetDepartmentSelectAll()
	if err != nil {
		log.Println("getContact GetDepartmentSelect ", err)
		return
	}
	posts, err := db.GetPostSelectAll(false)
	if err != nil {
		log.Println("getContact GetPostSelect(false) ", err)
		return
	}
	postsgo, err := db.GetPostSelectAll(true)
	if err != nil {
		log.Println("getContact GetPostSelect(true) ", err)
		return
	}
	ranks, err := db.GetRankSelectAll()
	if err != nil {
		log.Println("getContact GetRankSelect ", err)
		return
	}
	ctx := context{Title: "Create contact", Contact: contact, Companies: companies, Departments: departments, Posts: posts, PostsGO: postsgo, Ranks: ranks}
	render.DefaultResponder(w, r, ctx)
}

func createContact(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var contact edc.Contact
	_ = decoder.Decode(&contact)
	defer r.Body.Close()
	db.CreateContact(contact)
}

func updateContact(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var contact edc.Contact
	_ = decoder.Decode(&contact)
	defer r.Body.Close()
	db.UpdateContact(contact)
}

func deleteContact(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteContact(id)
}
