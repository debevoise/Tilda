Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root to: 'static_pages#root' 
	
	namespace :api, defaults: { format: :json } do
		resources :users, only: [:create] 
		resource :session, only: [:create, :destroy, :show]
		
		resources :songs, only: [:show] do
			member do
				post :like, to: 'songs#like', as: 'like'
				post :unlike, to: 'songs#unlike', as: 'unlike'
			end
		end

		resources :albums, only: [:show] do
			member do
				post :like, to: 'albums#like', as: 'like'
				post :unlike, to: 'albums#unlike', as: 'unlike'
			end
		end

		resources :artists, only: [:show] do 
			member do
				post :like, to: 'artists#like', as: 'like'
				post :unlike, to: 'artists#unlike', as: 'unlike'
			end
		end

		resources :playlists, only: [:create, :update, :index, :show, :destroy] do
			member do
				post :like, to: 'playlists#like', as: 'like'
				post :unlike, to: 'playlists#unlike', as: 'unlike'
				post :add, to: 'playlists#add', as: 'add'
				post :remove, to: 'playlists#remove', as: 'remove'
			end
		end

		resources :likes, only: [:index] do
			collection do
				get :artists
				get :songs
				get :albums
				get :playlists
			end

			# resources :artists, only: [:index]
			# resources :songs, only: [:index]
			# resources :albums, only: [:index]
			# resources :likes, only: :index
			# resources :playlists, only: :index
		end
	end

end
