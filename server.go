package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func initServer(port string, useLog bool) {
	e := echo.New()

	e.Use(middleware.Recover())

	if useLog {
		e.Use(middleware.Logger())
	}

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:8080", "https://127.0.0.1:8080", "http://localhost"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

	e.POST("/login", login)
	// e.GET("/", accessible)

	r := e.Group("/api/v1")
	config := middleware.JWTConfig{
		Claims:     &jwtClaims{},
		SigningKey: []byte("my5up3Rd4P3r53crEt"),
	}
	r.Use(middleware.JWTWithConfig(config))
	// r.GET("", restricted)

	r.GET("/contacts", listContacts)
	r.POST("/contacts", createContact)
	r.GET("/contacts/:id", getContact)
	r.PUT("/contacts/:id", updateContact)
	r.DELETE("/contacts/:id", deleteContact)

	// r.With(paginate).GET("/", listCompanies)
	r.GET("/companies", listCompanies)
	r.POST("/companies", createCompany)
	// r.GET("/search", SearchArticles)
	r.GET("/companies/:id", getCompany)
	r.PUT("/companies/:id", updateCompany)
	r.DELETE("/companies/:id", deleteCompany)

	r.GET("/scopes", listScopes)
	r.POST("/scopes", createScope)
	r.GET("/scopes/:id", getScope)
	r.PUT("/scopes/:id", updateScope)
	r.DELETE("/scopes/:id", deleteScope)

	r.GET("/educations", listEducations)
	r.POST("/educations", createEducation)
	r.GET("/educations/:id", getEducation)
	r.PUT("/educations/:id", updateEducation)
	r.DELETE("/educations/:id", deleteEducation)

	r.GET("/practices", listPractices)
	r.POST("/practices", createPractice)
	r.GET("/practices/:id", getPractice)
	r.PUT("/practices/:id", updatePractice)
	r.DELETE("/practices/:id", deletePractice)

	r.GET("/kinds", listKinds)
	r.POST("/kinds", createKind)
	r.GET("/kinds/:id", getKind)
	r.PUT("/kinds/:id", updateKind)
	r.DELETE("/kinds/:id", deleteKind)

	r.GET("/posts", listPosts)
	r.POST("/posts", createPost)
	r.GET("/posts/:id", getPost)
	r.PUT("/posts/:id", updatePost)
	r.DELETE("/posts/:id", deletePost)

	r.GET("/ranks", listRanks)
	r.POST("/ranks", createRank)
	r.GET("/ranks/:id", getRank)
	r.PUT("/ranks/:id", updateRank)
	r.DELETE("/ranks/:id", deleteRank)

	r.GET("/departments", listDepartments)
	r.POST("/departments", createDepartment)
	r.GET("/departments/:id", getDepartment)
	r.PUT("/departments/:id", updateDepartment)
	r.DELETE("/departments/:id", deleteDepartment)

	// e.("/about", about)
	// e.File("/favicon.ico", "public/favicon.ico")
	// e.Static("/public", "public")

	if useLog {
		e.Logger.Fatal(e.Start(":" + port))
	} else {
		_ = e.Start(":" + port)
	}
}
