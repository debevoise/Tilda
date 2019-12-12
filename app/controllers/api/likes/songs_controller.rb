class Api::Likes::SongsController < ApplicationController
    before_action :ensure_logged_in
    
    def index
        @songs = current_user.songs
        render 'api/songs/index'
    end
end
