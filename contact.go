package main

import (
	"log"
	"net/http"
	"regexp"
	"strconv"

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
		PostsGO     []edc.SelectItem `json:"postsGo"`
		Ranks       []edc.SelectItem `json:"ranks"`
	}
	id := toInt(chi.URLParam(r, "id"))
	contact, err := db.GetContact(id)
	if err != nil {
		log.Println("getContact GetContact ", err)
		return
	}
	companies, err := db.GetCompanySelect()
	if err != nil {
		log.Println("getContact GetCompanySelect ", err)
		return
	}
	departments, err := db.GetDepartmentSelect()
	if err != nil {
		log.Println("getContact GetDepartmentSelect ", err)
		return
	}
	posts, err := db.GetPostSelect(false)
	if err != nil {
		log.Println("getContact GetPostSelect(false) ", err)
		return
	}
	postsgo, err := db.GetPostSelect(true)
	if err != nil {
		log.Println("getContact GetPostSelect(true) ", err)
		return
	}
	ranks, err := db.GetRankSelect()
	if err != nil {
		log.Println("getContact GetRankSelect ", err)
		return
	}
	ctx := context{Title: "Create contact", Contact: contact, Companies: companies, Departments: departments, Posts: posts, PostsGO: postsgo, Ranks: ranks}
	render.DefaultResponder(w, r, ctx)
}

func createContact(w http.ResponseWriter, r *http.Request) {
	contact := contactParseEditForm(w, r)
	db.CreateContact(contact)
}

func updateContact(w http.ResponseWriter, r *http.Request) {
	contact := contactParseEditForm(w, r)
	db.UpdateContact(contact)
}

func deleteContact(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteContact(id)
}

func contactParseEditForm(w http.ResponseWriter, r *http.Request) (contact edc.Contact) {
	r.ParseForm()
	re := regexp.MustCompile("\\D")
	if id, err := strconv.ParseInt(r.FormValue("contact-id"), 10, 64); err == nil {
		contact.ID = id
	} else {
		contact.ID = 0
	}
	contact.Name = r.FormValue("contact-name")
	if i, err := strconv.ParseInt(r.FormValue("contact-company-id"), 10, 64); err == nil {
		if i != 0 {
			contact.CompanyID = i
		}
	}
	if i, err := strconv.ParseInt(r.FormValue("contact-department-id"), 10, 64); err == nil {
		if i != 0 {
			contact.DepartmentID = i
		}
	}
	if i, err := strconv.ParseInt(r.FormValue("contact-post-id"), 10, 64); err == nil {
		if i != 0 {
			contact.PostID = i
		}
	}
	if i, err := strconv.ParseInt(r.FormValue("contact-post-go-id"), 10, 64); err == nil {
		if i != 0 {
			contact.PostGOID = i
		}
	}
	if i, err := strconv.ParseInt(r.FormValue("contact-rank-id"), 10, 64); err == nil {
		if i != 0 {
			contact.RankID = i
		}
	}
	var emails []edc.Email
	formEmail := r.Form["email[]"]
	for _, email := range formEmail {
		var e edc.Email
		if email != "" {
			e.Email = email
			emails = append(emails, e)
		}
	}
	contact.Emails = emails
	contact.Birthday = r.FormValue("contact-birthday")
	var phones []edc.Phone
	formPhone := r.Form["phone[]"]
	for _, phone := range formPhone {
		phone = re.ReplaceAllString(phone, "")
		if numPhone, err := strconv.ParseInt(phone, 10, 64); err == nil {
			if numPhone != 0 {
				var p edc.Phone
				p.Fax = false
				p.Phone = numPhone
				phones = append(phones, p)
			}
		}
	}
	contact.Phones = phones
	var faxes []edc.Phone
	formFaxes := r.Form["fax[]"]
	for _, fax := range formFaxes {
		fax = re.ReplaceAllString(fax, "")
		if faxNumber, err := strconv.ParseInt(fax, 10, 64); err == nil {
			if faxNumber != 0 {
				var f edc.Phone
				f.Phone = faxNumber
				f.Fax = true
				faxes = append(faxes, f)
			}
		}
	}
	contact.Faxes = faxes
	var educations []edc.Education
	formEducation := r.Form["contact-education[]"]
	for _, id := range formEducation {
		if numEducation, err := strconv.ParseInt(id, 10, 64); err == nil {
			if numEducation != 0 {
				var education edc.Education
				if education, err = db.GetEducation(numEducation); err == nil {
					educations = append(educations, education)
				}
				if err != nil {
					log.Println("ContactParseEditForm GetEducation ", err)
				}
			}
		}
	}
	contact.Educations = educations
	note := r.FormValue("contact-note")
	if note != "" {
		contact.Note = note
	}
	return
}
