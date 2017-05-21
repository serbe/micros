package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listContacts(c echo.Context) error {
	type context struct {
		Title    string            `json:"title"`
		Contacts []edc.ContactList `json:"contacts"`
	}
	contacts, err := db.GetContactList()
	if err != nil {
		log.Println("listContacts GetContactList ", err)
		return err
	}
	ctx := context{Title: "List", Contacts: contacts}
	return c.JSON(http.StatusOK, ctx)
}

func getContact(c echo.Context) error {
	id := toInt(c.Param("id"))
	contact, err := db.GetContact(id)
	if err != nil {
		log.Println("getContact GetContact ", err)
		return err
	}
	companies, err := db.GetCompanySelectAll()
	if err != nil {
		log.Println("getContact GetCompanySelectAll ", err)
		return err
	}
	departments, err := db.GetDepartmentSelectAll()
	if err != nil {
		log.Println("getContact GetDepartmentSelectAll ", err)
		return err
	}
	posts, err := db.GetPostSelectAll(false)
	if err != nil {
		log.Println("getContact GetPostSelectAll(false) ", err)
		return err
	}
	postsgo, err := db.GetPostSelectAll(true)
	if err != nil {
		log.Println("getContact GetPostSelectAll(true) ", err)
		return err
	}
	ranks, err := db.GetRankSelectAll()
	if err != nil {
		log.Println("getContact GetRankSelectAll ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title":       "Create contact",
		"contact":     contact,
		"companies":   companies,
		"departments": departments,
		"posts":       posts,
		"posts_go":    postsgo,
		"ranks":       ranks,
	})
}

func createContact(c echo.Context) error {
	var contact edc.Contact
	err := c.Bind(&contact)
	if err != nil {
		return err
	}
	_, err = db.CreateContact(contact)
	return err
}

func updateContact(c echo.Context) error {
	var contact edc.Contact
	err := c.Bind(&contact)
	if err != nil {
		return err
	}
	return db.UpdateContact(contact)
}

func deleteContact(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeleteContact(id)
}
