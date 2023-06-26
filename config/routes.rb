Rails.application.routes.draw do
  resources :muscles
  resources :bones
  resources :regions do
    resources :bones, only: :create
  end
  resources :bodyparts do
    resources :muscles, only: :create
  end

    # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
