package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path"
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

func icoHandler(w http.ResponseWriter, r *http.Request) {
	buf, err := readFile("favicon.ico")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "image/x-icon")
	w.Write(buf)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	buf, err := readFile("index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "text/html")
	w.Write(buf)
}

func readFile(file string) ([]byte, error) {
	workDir, _ := os.Getwd()
	fileName := path.Base(path.Clean(file))
	filePath := path.Dir(path.Clean(file))
	fp, err := os.Open(path.Join(workDir, "public", filePath, fileName))
	log.Println(path.Join(workDir, "public", filePath, fileName))
	if err != nil {
		return nil, err
	}
	defer fp.Close()

	return ioutil.ReadAll(fp)
}
