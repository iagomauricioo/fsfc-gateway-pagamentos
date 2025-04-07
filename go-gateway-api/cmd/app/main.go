package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/repository"
	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/service"
	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/web/handlers/server"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func Getenv(key string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}

	return ""
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file", err)
	}

	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		Getenv("DB_HOST"),
		Getenv("DB_PORT"),
		Getenv("DB_USER"),
		Getenv("DB_PASSWORD"),
		Getenv("DB_NAME"),
		Getenv("SSL_MODE"),
	)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error opening database", err)
	}
	defer db.Close()

	accountRepository := repository.NewAccountRepository(db)
	accountService := service.NewAccountService(accountRepository)

	port := Getenv("HTTP_PORT")
	srv := server.NewServer(accountService, port)
	srv.ConfigureRoutes()

	if err := srv.Start(); err != nil {
		log.Fatal("Error starting server", err)
	}
}
