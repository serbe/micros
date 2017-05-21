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
