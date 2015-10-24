Rails.application.routes.draw do
  devise_for :users
  root to: 'application#angular'

  resources :markets, only: [:index, :show] do
    resources :booths, only: [:index, :create]
  end

  resources :booths, only: [:show] do
    resources :items, only: [:create, :show]
  end
end
