Rails.application.routes.draw do
  # resources :comments
  # resources :posts
  resources :users
  get '/me', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
