class Api::LikesController < ApplicationController
    before_action :ensure_logged_in

    def index
        @likes = current_user.likes 
        render 'api/likes/index'
    end

    def artists
        @artists = current_user.artists
        render 'api/artists/index'
    end

    def albums
        # .includes(:songs) -- Try includes if N+1 query
        @albums = current_user.albums.includes(:artist) 
        render 'api/albums/index'
    end

    def songs
        
        @songs = current_user.songs
        render 'api/songs/index'
    end

    def playlists
        @playlists = current_user.liked_playlists
        render 'api/playlists/index'
    end
    
    
end
