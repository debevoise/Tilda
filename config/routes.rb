Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' 
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] 
    resource :session, only: [:create, :destroy, :show]
    
    resources :songs, only: [:show]
    resources :albums, only: [:show]
    resources :artists, only: [:show]

    namespace :user do
      # resources :artists, only: [:index, :post, :destroy]
      # resources :songs, only: [:index, :post, :destroy]
      # resources :albums, only: [:index, :post, :destroy]
      post '/:likeable_type/:likeable_id'
      post '/:likeable_type/:likeable_id'
      # resources :playlists, only: [:index]
    end
  end

end
