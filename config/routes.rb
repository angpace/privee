Rails.application.routes.draw do
    resources :reviews
    resources :photos
    resources :users
    resources :requests
    resources :events
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "users#show"
    get "/chefs", to: "users#chefs"
 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
