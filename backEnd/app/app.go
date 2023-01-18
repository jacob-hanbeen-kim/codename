package app

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Start(){
	router := gin.Default()

	//define routes
	router.GET("/greet", func(c *gin.Context) {
		c.Header("Content-Type", "application/json")
		c.JSON(http.StatusOK, gin.H{"Title": "CodeName", "Desc": "Example API Call", "Content": "Hello Jacob and Paul"})
	})
	//starting server by default localhost :8080
	router.Run()
}
