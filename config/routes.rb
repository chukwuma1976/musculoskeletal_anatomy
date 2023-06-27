Rails.application.routes.draw do
  resources :users
  resources :muscles
  resources :bones
  resources :regions, only: [:index, :show] do
    resources :bones, only: :create
  end
  resources :bodyparts, only: [:index, :show] do
    resources :muscles, only: :create
  end

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

  get '/seed_muscles', to: 'muscles#seed_muscles'
  get '/seed_bones', to: 'bones#seed_bones'

    # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
