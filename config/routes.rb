Rails.application.routes.draw do
  root to: 'application#angular'

  resources :markets, only: [:index, :show] do
    resources :booths, only: [:index, :show, :create]
  end

  resources :booths, only: [] do
    resources :items, only: [:index, :create, :show]
  end
end
