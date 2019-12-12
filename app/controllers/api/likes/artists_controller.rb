class Api::Likes::ArtistsController < ApplicationController
    before_action :ensure_logged_in
    
    def index
        @artists = current_user.artists
        render 'api/artists/index'
    end
end
