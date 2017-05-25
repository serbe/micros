package main

// import (
// 	"net/http"
// 	"time"

// 	jwt "github.com/dgrijalva/jwt-go"
// )

// type jwtClaims struct {
// 	Name  string `json:"name"`
// 	Admin bool   `json:"admin"`
// 	jwt.StandardClaims
// }

// func login(c echo.Context) error {
// 	ctx := struct {
// 		Username string `json:"username" form:"username"`
// 		Password string `json:"password" form:"password"`
// 	}{}
// 	c.Bind(&ctx)
// 	if ctx.Username == "user" && ctx.Password == "pass" {
// 		claims := &jwtClaims{
// 			"Default User",
// 			false,
// 			jwt.StandardClaims{
// 				ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
// 			},
// 		}

// 		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

// 		t, err := token.SignedString([]byte("my5up3Rd4P3r53crEt"))
// 		if err != nil {
// 			return err
// 		}
// 		return c.JSON(http.StatusOK, echo.Map{
// 			"token": t,
// 		})
// 	}
// 	return echo.ErrUnauthorized
// }

// func restricted(c echo.Context) error {
// 	user := c.Get("user").(*jwt.Token)
// 	claims := user.Claims.(*jwtClaims)
// 	name := claims.Name
// 	return c.String(http.StatusOK, "Welcome "+name+"!")
// }
