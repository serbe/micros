package main

import (
	"time"

	"net/http"

	"github.com/goware/cors"
	"github.com/pressly/chi"
	"github.com/pressly/chi/middleware"
	"github.com/pressly/chi/render"
)

func initServer(port string, useLog bool) {
	r := chi.NewRouter()

	if useLog {
		r.Use(middleware.Logger)
	}
	r.Use(middleware.RequestID)
	r.Use(middleware.Recoverer)
	// r.Use(middleware.Compress())
	r.Use(middleware.Timeout(60 * time.Second))

	r.Use(render.SetContentType(render.ContentTypeJSON))

	cors := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:8080"}, // Use this to allow specific origin hosts
		// AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	})
	r.Use(cors.Handler)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("root."))
	})

	r.Get("/ping", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("pong"))
	})

	r.Get("/panic", func(w http.ResponseWriter, r *http.Request) {
		panic("test")
	})

	// e.("/login", login)

	// e.GET("/contacts/", contactList)
	// e.GET("/contacts/:id/", contactEdit)
	// e.POST("/contact/:id/", contactSave)
	// e.DELETE("/contact/:id/", contactDelete)

	r.Route("/companies", func(r chi.Router) {
		// r.With(paginate).Get("/", listCompanies)
		r.Get("/", listCompanies)
		r.Post("/", createCompany)
		// r.Get("/search", SearchArticles)

		r.Route("/:id", func(r chi.Router) {
			// r.Use(ArticleCtx)
			r.Get("/", getCompany)
			r.Put("/", updateCompany)
			r.Delete("/", deleteCompany)
		})
	})
	// e.GET("/companies/:id", companyEdit)
	// e.POST("/companies/:id", companySave)
	// e.DELETE("/companies/:id", companyDelete)

	// e.("/scope/list/", scopeList)
	// e.("/scope/edit/", scopeEdit)
	// e.("/scope/delete/", scopeDelete)
	// e.("/scope/save", scopeSave)

	// e.("/education/list/", educationList)
	// e.("/education/edit/", educationEdit)
	// e.("/education/delete/", educationDelete)
	// e.("/education/save", educationSave)

	// e.("/practice/list/", practiceList)
	// e.("/practice/edit/", practiceEdit)
	// e.("/practice/delete/", practiceDelete)
	// e.("/practice/save", practiceSave)

	// e.("/kind/list/", kindList)
	// e.("/kind/edit/", kindEdit)
	// e.("/kind/delete/", kindDelete)
	// e.("/kind/save", kindSave)

	// e.("/post/list/", postList)
	// e.("/post/edit/", postEdit)
	// e.("/post/delete/", postDelete)
	// e.("/post/save", postSave)

	// e.("/rank/list/", rankList)
	// e.("/rank/edit/", rankEdit)
	// e.("/rank/delete/", rankDelete)
	// e.("/rank/save", rankSave)

	// e.("/department/list/", departmentList)
	// e.("/department/edit/", departmentEdit)
	// e.("/department/delete/", departmentDelete)
	// e.("/department/save", departmentSave)

	// e.("/about", about)

	// e.File("/favicon.ico", "public/favicon.ico")
	// e.Static("/public", "public")

	http.ListenAndServe(":"+port, r)
}
