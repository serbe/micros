package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/serbe/edc"
)

func listRanks(c echo.Context) error {
	type context struct {
		Title string         `json:"title"`
		Ranks []edc.RankList `json:"ranks"`
	}
	ranks, err := db.GetRankListAll()
	if err != nil {
		log.Println("rankList edb.GetRankList ", err)
		return err
	}
	ctx := context{Title: "List", Ranks: ranks}
	return c.JSON(http.StatusOK, ctx)
}

func getRank(c echo.Context) error {
	type context struct {
		Title string   `json:"title"`
		Rank  edc.Rank `json:"rank"`
	}
	id := toInt(c.Param("id"))
	rank, err := db.GetRank(id)
	if err != nil {
		log.Println("getRank edb.GetRank ", err)
		return err
	}
	ctx := context{Title: "Create rank", Rank: rank}
	return c.JSON(http.StatusOK, ctx)
}

func createRank(c echo.Context) error {
	var rank edc.Rank
	err := c.Bind(&rank)
	if err != nil {
		return err
	}
	_, err = db.CreateRank(rank)
	return err
}

func updateRank(c echo.Context) error {
	var rank edc.Rank
	err := c.Bind(&rank)
	if err != nil {
		return err
	}
	return db.UpdateRank(rank)
}

func deleteRank(c echo.Context) error {
	id := toInt(c.Param("id"))
	return db.DeleteRank(id)
}
