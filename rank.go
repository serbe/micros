package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/serbe/edc"
)

func listRanks(w http.ResponseWriter, r *http.Request) {
	type context struct {
		Title string         `json:"title"`
		Ranks []edc.RankList `json:"ranks"`
	}
	ranks, err := db.GetRankListAll()
	if err != nil {
		errmsg("listRanks GetRankListAll", err)
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
		errmsg("getRank GetRank", err)
		return
	}
	ctx := context{Title: "Create rank", Rank: rank}
	render.DefaultResponder(w, r, ctx)
}

func createRank(w http.ResponseWriter, r *http.Request) {
	var rank edc.Rank
	decoder := json.NewDecoder(r.Body)
	errchkmsg("createRank decode", decoder.Decode(&rank))
	defer func() {
		errchkmsg("createRank defer Body.Close", r.Body.Close())
	}()
	_, err := db.CreateRank(rank)
	errchkmsg("createRank CreateRank", err)
	return
}

func updateRank(w http.ResponseWriter, r *http.Request) {
	var rank edc.Rank
	decoder := json.NewDecoder(r.Body)
	errchkmsg("updateRank decode", decoder.Decode(&rank))
	defer func() {
		errchkmsg("updateRank defer Body.Close", r.Body.Close())
	}()
	errchkmsg("updateRank UpdateRank", db.UpdateRank(rank))
	return
}

func deleteRank(w http.ResponseWriter, r *http.Request) {
	id := toInt(chi.URLParam(r, "id"))
	errchkmsg("deleteRank DeleteRank", db.DeleteRank(id))
	return
}
