class Api::AlbumsController < ApplicationController
    
    def show
        @album = Album.includes(:songs).find(params[:id])
        @album_songs = @album.songs

        render :show
    end
end
