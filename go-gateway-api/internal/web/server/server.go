package server

import (
	"context"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/service"
	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/web/handlers"
	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/web/middleware"
)

type Server struct {
	router         *chi.Mux
	server         *http.Server
	accountService *service.AccountService
	invoiceService *service.InvoiceService
	port           string
}

func NewServer(accountService *service.AccountService, invoiceService *service.InvoiceService, port string) *Server {
	return &Server{
		router:         chi.NewRouter(),
		accountService: accountService,
		invoiceService: invoiceService,
		port:           port,
	}
}

func (s *Server) ConfigureRoutes() {
	accountHandler := handlers.NewAccountHandler(s.accountService)
	invoiceHandler := handlers.NewInvoiceHandler(s.invoiceService)
	authMiddleware := middleware.NewAuthMiddleware(s.accountService)

	s.router.Post("/accounts", accountHandler.Create)
	s.router.Get("/accounts", accountHandler.Get)

	s.router.Group(func(r chi.Router) {
		r.Use(authMiddleware.Authenticate)
		r.Route("/invoice", func(r chi.Router) {
			r.Post("/", invoiceHandler.Create)
			r.Get("/{id}", invoiceHandler.GetByID)
			r.Get("/", invoiceHandler.ListByAccountApiKey)
		})
	})
}

func (s *Server) Start() error {
	s.server = &http.Server{
		Addr:    ":" + s.port,
		Handler: s.router,
	}

	s.logStartupMessage()
	return s.server.ListenAndServe()
}

func (s *Server) Stop() error {
	return s.server.Shutdown(context.Background())
}
func (s *Server) logStartupMessage() {
	log.Printf("Servidor rodando em http://localhost:%s", s.port)
}
