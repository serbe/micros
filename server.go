package main

import (
	"net/http"
	"path/filepath"
	"time"

	"github.com/goware/jwtauth"
	"github.com/pressly/chi"
	"github.com/pressly/chi/middleware"
	"github.com/pressly/chi/render"
)

func initServer(port string, useLog bool) {
	tokenAuth = jwtauth.New("HS256", sKey, nil)

	r := chi.NewRouter()

	if useLog {
		r.Use(middleware.Logger)
	}
	r.Use(middleware.RequestID)
	r.Use(middleware.Recoverer)
	// r.Use(middleware.Compress())
	r.Use(middleware.Timeout(60 * time.Second))
	r.Use(corsHandler)

	// Frontend
	r.Get("/", indexHandler)
	r.Get("/favicon.ico", serveFileHandler)
	r.FileServer("/static", http.Dir(filepath.Join("public", "static")))
	r.NotFound(indexHandler)

	// Auth
	r.Group(func(r chi.Router) {
		r.Post("/login", login)
	})

	// REST API
	r.Group(func(r chi.Router) {
		r.Use(tokenAuth.Verifier)
		r.Use(jwtauth.Authenticator)

		r.Use(render.SetContentType(render.ContentTypeJSON))

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
	})

	err := http.ListenAndServe(":"+port, r)
	errmsg("ListenAndServe", err)
}
