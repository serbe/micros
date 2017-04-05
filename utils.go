package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"strconv"

	"github.com/serbe/edc"
)

var (
	db *edc.Edb
)

// // Context - all fields for json
// type Context struct {
// 	Title             string             `json:"title"`
// 	Contact           edc.Contact        `json:"contact,omitempty"`
// 	Contacts          []edc.Contact      `json:"contacts,omitempty"`
// 	ContactsList      []edc.ContactList  `json:"contacts_list,omitempty"`
// 	Company           edc.Company        `json:"company,omitempty"`
// 	Companies         []edc.Company      `json:"companies,omitempty"`
// 	CompaniesList     []edc.CompanyList  `json:"companies_list,omitempty"`
// 	CompaniesSelect   []edc.SelectItem   `json:"companies_select,omitempty"`
// 	Scope             edc.Scope          `json:"scope,omitempty"`
// 	Scopes            []edc.Scope        `json:"scopes,omitempty"`
// 	ScopesSelect      []edc.SelectItem   `json:"scopes_select,omitempty"`
// 	Education         edc.Education      `json:"education,omitempty"`
// 	Educations        []edc.Education    `json:"educations,omitempty"`
// 	Practice          edc.Practice       `json:"practice,omitempty"`
// 	Practices         []edc.Practice     `json:"practices,omitempty"`
// 	PracticesList     []edc.PracticeList `json:"practice_list,omitempty"`
// 	Kind              edc.Kind           `json:"kind,omitempty"`
// 	Kinds             []edc.Kind         `json:"kinds,omitempty"`
// 	KindsSelect       []edc.SelectItem   `json:"kinds_select,omitempty"`
// 	Department        edc.Department     `json:"department,omitempty"`
// 	Departments       []edc.Department   `json:"departments,omitempty"`
// 	DepartmentsSelect []edc.SelectItem   `json:"departments_select,omitempty"`
// 	Post              edc.Post           `json:"post,omitempty"`
// 	Posts             []edc.PostList     `json:"posts,omitempty"`
// 	PostsSelect       []edc.SelectItem   `json:"posts_select,omitempty"`
// 	PostGO            edc.Post           `json:"post_go,omitempty"`
// 	PostsGO           []edc.Post         `json:"posts_go,omitempty"`
// 	PostsGOSelect     []edc.SelectItem   `json:"posts_go_select,omitempty"`
// 	Rank              edc.Rank           `json:"rank,omitempty"`
// 	Ranks             []edc.Rank         `json:"ranks,omitempty"`
// 	RanksSelect       []edc.SelectItem   `json:"ranks_select,omitempty"`
// }

// Config all vars
type Config struct {
	Base struct {
		Host     string `json:"host"`
		User     string `json:"user"`
		Password string `json:"password"`
		Dbname   string `json:"dbname"`
		LogSQL   bool   `json:"logsql"`
		LogErr   bool   `json:"logerr"`
	} `json:"base"`
	Web struct {
		Port string `json:"port"`
		Log  bool   `json:"log"`
		UI   string `json:"ui"`
	} `json:"web"`
}

func getConfig() (c Config, err error) {
	file, err := ioutil.ReadFile("./config.json")
	if err != nil {
		log.Println("Error ioutil.ReadFile: ", err)
		return
	}
	if err = json.Unmarshal(file, &c); err != nil {
		log.Println("Error json.Unmarshal: ", err)
		return
	}
	if c.Base.Dbname == "" {
		log.Println("Error: empty database name in config")
		return c, errors.New("Error: empty database name in config")
	}
	return
}

func toInt(num string) int64 {
	id, _ := strconv.ParseInt(num, 10, 64)
	return id
}
