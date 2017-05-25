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
	db        *edc.Edb
	logErrors bool
)

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
		errmsg("getConfig ReadFile", err)
		return
	}
	if err = json.Unmarshal(file, &c); err != nil {
		errmsg("getConfig Unmarshal", err)
		return
	}
	logErrors = c.Base.LogErr
	if c.Base.Dbname == "" {
		err := errors.New("Error: empty database name in config")
		errmsg("getConfig", err)
		return c, err
	}
	return
}

func toInt(num string) int64 {
	id, err := strconv.ParseInt(num, 10, 64)
	errmsg("toInt", err)
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
