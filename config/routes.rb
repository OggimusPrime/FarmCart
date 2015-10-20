Rails.application.routes.draw do
  root to: 'application#angular'

  resources :items, only: [:create, :index, :show]

  resources :booths, only: [:create, :index, :show]

  resources :markets, only: [:index, :show]
end
