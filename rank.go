package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"github.com/serbe/edc"
)

func listRanks(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string         `json:"title"`
		Ranks []edc.RankList `json:"ranks"`
	}
	ranks, err := db.GetRankListAll()
	if err != nil {
		log.Println("rankList edb.GetRankList ", err)
		return
	}
	ctx := context{Title: "List", Ranks: ranks}
	render.DefaultResponder(w, r, ctx)
}

func getRank(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string   `json:"title"`
		Rank  edc.Rank `json:"rank"`
	}
	id := toInt(chi.URLParam(r, "id"))
	rank, err := db.GetRank(id)
	if err != nil {
		log.Println("getRank edb.GetRank ", err)
		return
	}
	ctx := context{Title: "Create rank", Rank: rank}
	render.DefaultResponder(w, r, ctx)
}

func createRank(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var rank edc.Rank
	_ = decoder.Decode(&rank)
	defer r.Body.Close()
	db.CreateRank(rank)
	return
}

func updateRank(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var rank edc.Rank
	_ = decoder.Decode(&rank)
	defer r.Body.Close()
	db.UpdateRank(rank)
	return
}

func deleteRank(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	db.DeleteRank(id)
	return
}
