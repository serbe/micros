package main

import (
	"net/http"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/goware/jwtauth"
	"github.com/pressly/chi/render"
)

var tokenAuth *jwtauth.JwtAuth

type loginData struct {
	Username string `json:"name"`
	Password string `json:"password"`
}

type jToken struct {
	Token string `json:"token"`
}

func (l *loginData) Bind(r *http.Request) error {
	// just a post-process after a decode..
	return nil
}

// type jwtClaims struct {
// 	Name  string `json:"name"`
// 	Admin bool   `json:"admin"`
// 	jwt.StandardClaims
// }

func tokenInit() {
	tokenAuth = jwtauth.New("HS256", []byte("my5up3RdYP3r53crEt"), nil)
}

func login(w http.ResponseWriter, r *http.Request) {
	data := loginData{}
	token := jwt.New(jwt.SigningMethodHS256)
	err := render.Bind(r, &data)
	if err != nil {
		render.Status(r, http.StatusInternalServerError)
		render.PlainText(w, r, err.Error())
		return
	}

	if data.Username == "user" && data.Password == "pass" {
		claims := token.Claims.(jwt.MapClaims)
		claims["admin"] = false
		claims["name"] = data.Username
		claims["exp"] = time.Now().Add(time.Hour * 24).Unix()
		tokenString, err := token.SignedString("my5up3RdYP3r53crEt")
		if err != nil {
			render.Status(r, http.StatusInternalServerError)
			render.PlainText(w, r, err.Error())
			return
		}
		render.JSON(w, r, jToken{Token: tokenString})
	} else {
		render.Status(r, http.StatusNotFound)
		render.PlainText(w, r, "Invalid Username or Password")
	}
}

// func restricted(c echo.Context) error {
// 	user := c.Get("user").(*jwt.Token)
// 	claims := user.Claims.(*jwtClaims)
// 	name := claims.Name
// 	return c.String(http.StatusOK, "Welcome "+name+"!")
// }
