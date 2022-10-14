Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  get '/search/businesses/:term/:location/:radius/:price/:open_now/:gender_neutral_bathrooms/:wheelchair_accessible/:limit/:offset/:hot_and_new', to: "businesses#get_businesses"
  get '/search/businesses/:id', to: "businesses#get_business_by_id"
  get '/search/businesses/:id/reviews', to: "reviews#get_reviews_by_business_id"
  # get '*path', to: "static_pages#frontend_index"
end
