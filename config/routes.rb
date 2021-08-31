Rails.application.routes.draw do
  # resources :comments
  resources :posts
  resources :users
  
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/alpha', to: 'posts#alpha'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
