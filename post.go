package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listPosts(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string         `json:"title"`
		Posts []edc.PostList `json:"posts"`
	}
	posts, err := db.GetPostListAll()
	if err != nil {
		errmsg("listPosts GetPostListAll", err)
		return
	}
	ctx := context{Title: "List", Posts: posts}
	render.DefaultResponder(w, r, ctx)
}

func getPost(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string   `json:"title"`
		Post  edc.Post `json:"post"`
	}
	id := toInt(chi.URLParam(r, "id"))
	post, err := db.GetPost(id)
	if err != nil {
		errmsg("getPost GetPost", err)
		return
	}
	ctx := context{Title: "Create post", Post: post}
	render.DefaultResponder(w, r, ctx)
}

func createPost(w http.ResponseWriter, r *http.Request) {
	var post edc.Post
	errchkmsg("createPost Decode", json.NewDecoder(r.Body).Decode(&post))
	_, err := db.CreatePost(post)
	errchkmsg("createPost CreatePost", err)
	r.Body.Close()
}

func updatePost(w http.ResponseWriter, r *http.Request) {
	var post edc.Post
	errchkmsg("updatePost Decode", json.NewDecoder(r.Body).Decode(&post))
	errchkmsg("updatePost UpdatePost", db.UpdatePost(post))
	r.Body.Close()
}

func deletePost(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deletePost DeletePost", db.DeletePost(id))
}
