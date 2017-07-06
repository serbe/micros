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
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createPost Decode", decoder.Decode(&post))
	defer func() {
		errchkmsg("createPost defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreatePost(post)
	errchkmsg("createPost CreatePost", err)
	return
}

func updatePost(w http.ResponseWriter, r *http.Request) {
	var post edc.Post
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updatePost Decode", decoder.Decode(&post))
	defer func() {
		errchkmsg("updatePost defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updatePost UpdatePost", db.UpdatePost(post))
	return
}

func deletePost(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deletePost DeletePost", db.DeletePost(id))
	return
}
