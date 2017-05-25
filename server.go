package main

import (
	"net/http"
	"time"

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
		// AllowedOrigins:   []string{"*"},
		AllowedOrigins:   []string{"http://localhost:8080"}, // Use this to allow specific origin hosts
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	})
	r.Use(cors.Handler)

	// r.Get("/", func(w http.ResponseWriter, r *http.Request) {
	// 	w.Write([]byte("root."))
	// })

	//e.File("/", "public/index.html")
	//e.File("/favicon.ico", "public/favicon.ico")
	//e.Static("/static", "public/static")

	//e.POST("/login", login)

	// e.("/login", login)

	r.Route("/api/v1/contacts", func(r chi.Router) {
		r.Get("/", listContacts)
		r.Post("/", createContact)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getContact)
			r.Put("/", updateContact)
			r.Delete("/", deleteContact)
		})
	})

	r.Route("/api/v1/companies", func(r chi.Router) {
		// r.With(paginate).Get("/", listCompanies)
		r.Get("/", listCompanies)
		r.Post("/", createCompany)
		// r.Get("/search", SearchArticles)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getCompany)
			r.Put("/", updateCompany)
			r.Delete("/", deleteCompany)
		})
	})

	r.Route("/api/v1/scopes", func(r chi.Router) {
		r.Get("/", listScopes)
		r.Post("/", createScope)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getScope)
			r.Put("/", updateScope)
			r.Delete("/", deleteScope)
		})
	})

	r.Route("/api/v1/educations", func(r chi.Router) {
		r.Get("/", listEducations)
		r.Post("/", createEducation)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getEducation)
			r.Put("/", updateEducation)
			r.Delete("/", deleteEducation)
		})
	})

	r.Route("/api/v1/practices", func(r chi.Router) {
		r.Get("/", listPractices)
		r.Post("/", createPractice)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getPractice)
			r.Put("/", updatePractice)
			r.Delete("/", deletePractice)
		})
	})

	r.Route("/api/v1/kinds", func(r chi.Router) {
		r.Get("/", listKinds)
		r.Post("/", createKind)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getKind)
			r.Put("/", updateKind)
			r.Delete("/", deleteKind)
		})
	})

	r.Route("/api/v1/posts", func(r chi.Router) {
		r.Get("/", listPosts)
		r.Post("/", createPost)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getPost)
			r.Put("/", updatePost)
			r.Delete("/", deletePost)
		})
	})

	r.Route("/api/v1/ranks", func(r chi.Router) {
		r.Get("/", listRanks)
		r.Post("/", createRank)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getRank)
			r.Put("/", updateRank)
			r.Delete("/", deleteRank)
		})
	})

	r.Route("/api/v1/departments", func(r chi.Router) {
		r.Get("/", listDepartments)
		r.Post("/", createDepartment)
		r.Route("/:id", func(r chi.Router) {
			r.Get("/", getDepartment)
			r.Put("/", updateDepartment)
			r.Delete("/", deleteDepartment)
		})
	})

	// e.("/about", about)
	// e.File("/favicon.ico", "public/favicon.ico")
	// e.Static("/public", "public")

	err := http.ListenAndServe(":"+port, r)
	errmsg("ListenAndServe", err)
}
