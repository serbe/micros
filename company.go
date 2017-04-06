package main

import (
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listCompanies(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title     string            `json:"title"`
		Companies []edc.CompanyList `json:"companies"`
	}
	companyes, err := db.GetCompanyList()
	if err != nil {
		log.Println("listCompanies db.GetCompanyList ", err)
		return
	}
	ctx := context{Title: "List company", Companies: companyes}
	render.DefaultResponder(w, r, ctx)
}

func getCompany(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title   string           `json:"title"`
		Company edc.Company      `json:"company"`
		Scopes  []edc.SelectItem `json:"scopes"`
	}
	id := toInt(chi.URLParam(r, "id"))
	company, err := db.GetCompany(id)
	if err != nil {
		log.Println("getCompany db.GetCompany ", err)
		return
	}
	scopesSelect, err := db.GetScopeSelect()
	if err != nil {
		log.Println("getCompany db.GetScopeSelect ", err)
		return
	}
	ctx := context{Title: "Get company", Company: company, Scopes: scopesSelect}
	render.DefaultResponder(w, r, ctx)
}

func createCompany(w http.ResponseWriter, r *http.Request) {
	company := companyParseEditForm(w, r)
	db.CreateCompany(company)
}

func updateCompany(w http.ResponseWriter, r *http.Request) {
	company := companyParseEditForm(w, r)
	db.UpdateCompany(company)
}

func deleteCompany(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteCompany(id)
}

func companyParseEditForm(w http.ResponseWriter, r *http.Request) (company edc.Company) {
	// r.ParseForm()
	// re := regexp.MustCompile("\\D")
	// if id, err := strconv.ParseInt(r.FormValue("company-id"), 10, 64); err == nil {
	// 	company.ID = id
	// } else {
	// 	company.ID = 0
	// }
	// company.Name = r.FormValue("company-name")
	// company.Address = r.FormValue("company-address")
	// var emails []edc.Email
	// formEmail := r.Form["email[]"]
	// for _, email := range formEmail {
	// 	if email != "" {
	// 		var e edc.Email
	// 		e.Email = email
	// 		emails = append(emails, e)
	// 	}
	// }
	// company.Emails = emails
	// if is, err := strconv.ParseInt(r.FormValue("company-scope-id"), 10, 64); err == nil {
	// 	if is != 0 {
	// 		company.ScopeID = is
	// 	}
	// }
	// var phones []edc.Phone
	// formPhone := r.Form["phone[]"]
	// for _, phone := range formPhone {
	// 	var p edc.Phone
	// 	phone = re.ReplaceAllString(phone, "")
	// 	if phoneNumber, err := strconv.ParseInt(phone, 10, 64); err == nil {
	// 		if phoneNumber != 0 {
	// 			p.Phone = phoneNumber
	// 			phones = append(phones, p)
	// 		}
	// 	}
	// }
	// company.Phones = phones
	// var faxes []edc.Phone
	// formFaxes := r.Form["fax[]"]
	// for _, fax := range formFaxes {
	// 	var f edc.Phone
	// 	fax = re.ReplaceAllString(fax, "")
	// 	faxNumber, err := strconv.ParseInt(fax, 10, 64)
	// 	if err == nil && faxNumber != 0 {
	// 		f.Phone = faxNumber
	// 		f.Fax = true
	// 		faxes = append(faxes, f)
	// 	}
	// }
	// company.Faxes = faxes
	// var practices []edc.Practice
	// formPractice := r.Form["practice[]"]
	// for _, practice := range formPractice {
	// 	var p edc.Practice
	// 	practice = re.ReplaceAllString(practice, "")
	// 	if numPractice, err := strconv.ParseInt(practice, 10, 64); err == nil {
	// 		if numPractice != 0 {
	// 			if p, err = db.GetPractice(numPractice); err == nil {
	// 				practices = append(practices, p)
	// 			}
	// 			if err != nil {
	// 				log.Println("CompanyParseEditForm GetPractice ", err)
	// 			}
	// 		}
	// 	}
	// }
	// company.Practices = practices
	// note := r.FormValue("company-note")
	// if note != "" {
	// 	company.Note = note
	// }
	return
}
