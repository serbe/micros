package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listPosts(c echo.Context) error {
	posts, err := db.GetPostListAll()
	if err != nil {
		log.Println("postList edb.GetPostList ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title": "List",
		"posts": posts,
	})
}

func getPost(c echo.Context) error {
	id := toInt(c.Param("id"))
	post, err := db.GetPost(id)
	if err != nil {
		log.Println("getPost edb.GetPost ", err)
		return err
	}
	return c.JSON(http.StatusOK, echo.Map{
		"title": "Create post",
		"post":  post,
	})
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
