Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "static_pages#hello_elm"
  get "hello_elm", to: "static_pages#hello_elm"
  get "hello_react", to: "static_pages#hello_react"
end
