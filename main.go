package main

import (
	"github.com/serbe/edc"
)

func main() {
	cfg, err := getConfig()
	if err != nil {
		return
	}
	db, err = edc.InitDB(
		cfg.Base.Host,
		cfg.Base.Dbname,
		cfg.Base.User,
		cfg.Base.Password,
		cfg.Base.LogSQL,
		cfg.Base.LogErr,
	)
	if err != nil {
		return
	}
	initServer(cfg.Web.Host+":"+cfg.Web.Port, cfg.Web.Log, cfg.Web.Auth)
}
