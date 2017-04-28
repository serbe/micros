package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listPosts(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string         `json:"title"`
		Posts []edc.PostList `json:"posts"`
	}
	posts, err := db.GetPostListAll()
	if err != nil {
		log.Println("postList edb.GetPostList ", err)
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
		log.Println("getPost edb.GetPost ", err)
		return
	}
	ctx := context{Title: "Create post", Post: post}
	render.DefaultResponder(w, r, ctx)
}

func createPost(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var post edc.Post
	_ = decoder.Decode(&post)
	defer r.Body.Close()
	db.CreatePost(post)
	return
}

func updatePost(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var post edc.Post
	_ = decoder.Decode(&post)
	defer r.Body.Close()
	db.UpdatePost(post)
	return
}

func deletePost(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeletePost(id)
	return
}
