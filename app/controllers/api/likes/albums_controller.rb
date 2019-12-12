class Api::Likes::AlbumsController < ApplicationController
    before_action :ensure_logged_in

    def index
        # .includes(:songs) -- Try includes if N+1 query
        @albums = current_user.albums 
        render 'api/albums/index'
    end

end
