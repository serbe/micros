package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listContacts(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title    string            `json:"title"`
		Contacts []edc.ContactList `json:"contacts"`
	}
	contacts, err := db.GetContactList()
	if err != nil {
		errmsg("listContacts GetContactList", err)
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
		errmsg("getContact GetContact", err)
		return
	}
	companies, err := db.GetCompanySelectAll()
	if err != nil {
		errmsg("getContact GetCompanySelectAll", err)
		return
	}
	departments, err := db.GetDepartmentSelectAll()
	if err != nil {
		errmsg("getContact GetDepartmentSelectAll", err)
		return
	}
	posts, err := db.GetPostSelectAll(false)
	if err != nil {
		errmsg("getContact GetPostSelectAll(false)", err)
		return
	}
	postsgo, err := db.GetPostSelectAll(true)
	if err != nil {
		errmsg("getContact GetPostSelectAll(true)", err)
		return
	}
	ranks, err := db.GetRankSelectAll()
	if err != nil {
		errmsg("getContact GetRankSelectAll", err)
		return
	}
	ctx := context{
		Title:       "Create contact",
		Contact:     contact,
		Companies:   companies,
		Departments: departments,
		Posts:       posts,
		PostsGO:     postsgo,
		Ranks:       ranks,
	}
	render.DefaultResponder(w, r, ctx)
}

func createContact(w http.ResponseWriter, r *http.Request) {
	var contact edc.Contact
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createContact Decode", decoder.Decode(&contact))
	defer func() {
		errchkmsg("createContact defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateContact(contact)
	errchkmsg("createContact CreateContact", err)
}

func updateContact(w http.ResponseWriter, r *http.Request) {
	var contact edc.Contact
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateContact Decode", decoder.Decode(&contact))
	defer func() {
		errchkmsg("updateContact defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateContact UpdateContact", db.UpdateContact(contact))
}

func deleteContact(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteContact DeleteContact", db.DeleteContact(id))
}
