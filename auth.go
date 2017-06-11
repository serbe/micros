package main

import (
	"encoding/json"
	"net/http"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/goware/jwtauth"
	"github.com/pressly/chi/render"
)

var sKey = []byte("my5up3RdYP3r53crEt")

var tokenAuth *jwtauth.JwtAuth

type loginData struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type jToken struct {
	Token string `json:"token"`
	Name  string `json:"name"`
	Admin bool   `json:"admin"`
}

func (l *loginData) Bind(r *http.Request) error {
	// just a post-process after a decode..
	return nil
}

func login(w http.ResponseWriter, r *http.Request) {
	var data loginData
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&data)
	if err != nil {
		errmsg("login Decode", err)
		// render.Status(r, http.StatusInternalServerError)
		// render.PlainText(w, r, err.Error())
		// return
	}
	defer func() {
		errchkmsg("login defer Body.Close", r.Body.Close())
	}()

	if data.Username == "user" && data.Password == "userpass" {
		token := jwt.New(jwt.SigningMethodHS256)
		claims := token.Claims.(jwt.MapClaims)
		claims["admin"] = false
		claims["name"] = data.Username
		claims["exp"] = time.Now().Add(time.Hour * 24).Unix()
		tokenString, err := token.SignedString(sKey)
		if err != nil {
			errmsg("login SignedString", err)
			render.Status(r, http.StatusInternalServerError)
			render.PlainText(w, r, err.Error())
			return
		}
		render.JSON(w, r, jToken{Token: tokenString, Name: data.Username, Admin: false})
	} else {
		render.Status(r, http.StatusNotFound)
		render.PlainText(w, r, "Invalid Username or Password")
	}
}
