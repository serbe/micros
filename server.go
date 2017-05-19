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

	// e.GET("/", func(c echo.Context) error {
	// 	w.Write([]byte("root."))
	// })

	// e.GET("/ping", func(c echo.Context) error {
	// 	w.Write([]byte("pong"))
	// })

	// e.GET("/panic", func(c echo.Context) error {
	// 	panic("test")
	// })

	e.POST("/auth/login", login)

	e.GET("/contacts", listContacts)
	e.POST("/contacts", createContact)
	e.GET("/contacts/:id", getContact)
	e.PUT("/contacts/:id", updateContact)
	e.DELETE("/contacts/:id", deleteContact)

	// e.With(paginate).GET("/", listCompanies)
	e.GET("/companies", listCompanies)
	e.POST("/companies", createCompany)
	// e.GET("/search", SearchArticles)
	e.GET("/companies/:id", getCompany)
	e.PUT("/companies/:id", updateCompany)
	e.DELETE("/companies/:id", deleteCompany)

	e.GET("/scopes", listScopes)
	e.POST("/scopes", createScope)
	e.GET("/scopes/:id", getScope)
	e.PUT("/scopes/:id", updateScope)
	e.DELETE("/scopes/:id", deleteScope)

	e.GET("/educations", listEducations)
	e.POST("/educations", createEducation)
	e.GET("/educations/:id", getEducation)
	e.PUT("/educations/:id", updateEducation)
	e.DELETE("/educations/:id", deleteEducation)

	e.GET("/practices", listPractices)
	e.POST("/practices", createPractice)
	e.GET("/practices/:id", getPractice)
	e.PUT("/practices/:id", updatePractice)
	e.DELETE("/practices/:id", deletePractice)

	e.GET("/kinds", listKinds)
	e.POST("/kinds", createKind)
	e.GET("/kinds/:id", getKind)
	e.PUT("/kinds/:id", updateKind)
	e.DELETE("/kinds/:id", deleteKind)

	e.GET("/posts", listPosts)
	e.POST("/posts", createPost)
	e.GET("/posts/:id", getPost)
	e.PUT("/posts/:id", updatePost)
	e.DELETE("/posts/:id", deletePost)

	e.GET("/ranks", listRanks)
	e.POST("/ranks", createRank)
	e.GET("/ranks/:id", getRank)
	e.PUT("/ranks/:id", updateRank)
	e.DELETE("/ranks/:id", deleteRank)

	e.GET("/departments", listDepartments)
	e.POST("/departments", createDepartment)
	e.GET("/departments/:id", getDepartment)
	e.PUT("/departments/:id", updateDepartment)
	e.DELETE("/departments/:id", deleteDepartment)

	// e.("/about", about)
	// e.File("/favicon.ico", "public/favicon.ico")
	// e.Static("/public", "public")

	// if (useLog) {
	e.Logger.Fatal(e.Start(":" + port))
	// } else {
	// e.Start(":"+port)
	// }
}
