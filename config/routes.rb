Rails.application.routes.draw do
  resources :muscles
  resources :bones
  resources :regions
  resources :bodyparts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
