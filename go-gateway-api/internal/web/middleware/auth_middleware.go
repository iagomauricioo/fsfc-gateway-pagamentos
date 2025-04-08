package middleware

import (
	"context"
	"net/http"

	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/domain"
	"github.com/iagomauricio/fsfc-gateway-pagamentos/go-gateway/internal/service"
)

type AuthMiddleware struct {
	accountService *service.AccountService
}

func NewAuthMiddleware(service *service.AccountService) *AuthMiddleware {
	return &AuthMiddleware{accountService: service}
}

func (m *AuthMiddleware) Authenticate(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		apiKey := r.Header.Get("X-API-KEY")
		if apiKey == "" {
			http.Error(w, "API key is required", http.StatusUnauthorized)
			return
		}

		account, err := m.accountService.FindByApiKey(apiKey)
		if err != nil {
			if err == domain.ErrAccountNotFound {
				http.Error(w, err.Error(), http.StatusUnauthorized)
				return
			}
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		next.ServeHTTP(w, r.WithContext(context.WithValue(r.Context(), "account", account)))
	})
}
