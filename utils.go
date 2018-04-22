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
	logErrors bool
	cors      bool
	corsURL   string
	db        *edc.Edb
)

// Config all vars
type Config struct {
	Base struct {
		LogSQL   bool   `json:"logsql"`
		LogErr   bool   `json:"logerr"`
		Host     string `json:"host"`
		Port     string `json:"port"`
		User     string `json:"user"`
		Password string `json:"password"`
		Dbname   string `json:"dbname"`
	} `json:"base"`
	Web struct {
		Log     bool   `json:"log"`
		Auth    bool   `json:"auth"`
		CORS    bool   `json:"cors"`
		CORSURL string `json:"cors_url"`
		Host    string `json:"host"`
		Port    string `json:"port"`
	} `json:"web"`
}

func getConfig() (Config, error) {
	var c Config
	file, err := ioutil.ReadFile("./config.json")
	if err != nil {
		errmsg("getConfig ReadFile", err)
		return c, err
	}
	if err = json.Unmarshal(file, &c); err != nil {
		errmsg("getConfig Unmarshal", err)
		return c, err
	}
	logErrors = c.Base.LogErr
	if c.Base.Dbname == "" {
		err = errors.New("Error: empty database name in config")
		errmsg("getConfig", err)
		return c, err
	}
	cors = c.Web.CORS
	corsURL = c.Web.CORSURL
	return c, err
}

func toInt(num string) int64 {
	id, err := strconv.ParseInt(num, 10, 64)
	errchkmsg("toInt", err)
	return id
}

func errmsg(str string, err error) {
	if logErrors {
		log.Println("Error in", str, err)
	}
}

func errchkmsg(str string, err error) {
	if logErrors && err != nil {
		log.Println("Error in", str, err)
	}
}
