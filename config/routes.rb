Rails.application.routes.draw do
  root to: 'application#angular'

  resources :items, only: [:index]

  resources :booths, only: [:create, :index, :show] do
    resources :items, only: [:create, :show]
  end

  resources :markets, only: [:index, :show]
end
