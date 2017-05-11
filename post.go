package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listPosts(c echo.Context) error {
	type context struct {
		Title string         `json:"title"`
		Posts []edc.PostList `json:"posts"`
	}
	posts, err := db.GetPostListAll()
	if err != nil {
		log.Println("postList edb.GetPostList ", err)
		return err
	}
	ctx := context{Title: "List", Posts: posts}
	return c.JSON(http.StatusOK, ctx)
}

func getPost(c echo.Context) error {
	type context struct {
		Title string   `json:"title"`
		Post  edc.Post `json:"post"`
	}
	id := toInt(c.Param("id"))
	post, err := db.GetPost(id)
	if err != nil {
		log.Println("getPost edb.GetPost ", err)
		return err
	}
	ctx := context{Title: "Create post", Post: post}
	return c.JSON(http.StatusOK, ctx)
}

func createPost(c echo.Context) error {
	var post edc.Post
	err := c.Bind(&post)
	if err != nil {
		return err
	}
	_, err = db.CreatePost(post)
	return err
}

func updatePost(c echo.Context) error {
	var post edc.Post
	err := c.Bind(&post)
	if err != nil {
		return err
	}
	return db.UpdatePost(post)
}

func deletePost(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeletePost(id)
}
