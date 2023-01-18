package app

import (
	"encoding/json"
	"net/http"
)

type Sample struct {
	Title   string `json:"Title"`
	Desc    string `json:"desc"`
	Content string `json:"content"`
}

func greet(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	example := []Sample{
		{Title: "CodeName", Desc: "Example API Call", Content: "Hello Jacob and Paul"},
	}

	json.NewEncoder(w).Encode(example)
}
