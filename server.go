package main

import (
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/jwtauth"
	"github.com/go-chi/render"
)

func initServer(host string, useLog, useAuth bool) {
	tokenAuth = jwtauth.New("HS256", sKey, nil)

	r := chi.NewRouter()

	if useLog {
		r.Use(middleware.Logger)
	}
	r.Use(middleware.RequestID)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Timeout(60 * time.Second))
	if cors {
		r.Use(corsHandler)
	}

	// Auth
	r.Group(func(r chi.Router) {
		r.Post("/edds/api/login", login)
	})

	// REST API
	r.Group(func(r chi.Router) {
		if useAuth {
			r.Use(jwtauth.Verifier(tokenAuth))
			r.Use(jwtauth.Authenticator)
		}

		r.Use(render.SetContentType(render.ContentTypeJSON))

		r.Route("/edds/api/contacts", func(r chi.Router) {
			r.Get("/", listContacts)
			r.Post("/", createContact)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getContact)
				r.Put("/", updateContact)
				r.Delete("/", deleteContact)
			})
		})

		r.Route("/edds/api/companies", func(r chi.Router) {
			r.Get("/", listCompanies)
			r.Post("/", createCompany)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getCompany)
				r.Put("/", updateCompany)
				r.Delete("/", deleteCompany)
			})
		})

		r.Route("/edds/api/scopes", func(r chi.Router) {
			r.Get("/", listScopes)
			r.Post("/", createScope)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getScope)
				r.Put("/", updateScope)
				r.Delete("/", deleteScope)
			})
		})

		r.Route("/edds/api/educations", func(r chi.Router) {
			r.Get("/", listEducations)
			r.Get("/near", listEducationsNear)
			r.Post("/", createEducation)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getEducation)
				r.Put("/", updateEducation)
				r.Delete("/", deleteEducation)
			})
		})

		r.Route("/edds/api/practices", func(r chi.Router) {
			r.Get("/", listPractices)
			r.Get("/near", listPracticesNear)
			r.Post("/", createPractice)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getPractice)
				r.Put("/", updatePractice)
				r.Delete("/", deletePractice)
			})
		})

		r.Route("/edds/api/kinds", func(r chi.Router) {
			r.Get("/", listKinds)
			r.Post("/", createKind)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getKind)
				r.Put("/", updateKind)
				r.Delete("/", deleteKind)
			})
		})

		r.Route("/edds/api/posts", func(r chi.Router) {
			r.Get("/", listPosts)
			r.Post("/", createPost)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getPost)
				r.Put("/", updatePost)
				r.Delete("/", deletePost)
			})
		})

		r.Route("/edds/api/ranks", func(r chi.Router) {
			r.Get("/", listRanks)
			r.Post("/", createRank)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getRank)
				r.Put("/", updateRank)
				r.Delete("/", deleteRank)
			})
		})

		r.Route("/edds/api/departments", func(r chi.Router) {
			r.Get("/", listDepartments)
			r.Post("/", createDepartment)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getDepartment)
				r.Put("/", updateDepartment)
				r.Delete("/", deleteDepartment)
			})
		})

		r.Route("/edds/api/sirens", func(r chi.Router) {
			r.Get("/", listSiren)
			r.Post("/", createSiren)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getSiren)
				r.Put("/", updateSiren)
				r.Delete("/", deleteSiren)
			})
		})

		r.Route("/edds/api/sirentypes", func(r chi.Router) {
			r.Get("/", listSirenTypes)
			r.Post("/", createSirenType)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getSirenType)
				r.Put("/", updateSirenType)
				r.Delete("/", deleteSirenType)
			})
		})

		r.Route("/edds/api/certificates", func(r chi.Router) {
			r.Get("/", listCertificates)
			r.Post("/", createCertificate)
			r.Route("/{id}", func(r chi.Router) {
				r.Get("/", getCertificate)
				r.Put("/", updateCertificate)
				r.Delete("/", deleteCertificate)
			})
		})
	})

	err := http.ListenAndServe(host, r)
	errmsg("ListenAndServe", err)
}
