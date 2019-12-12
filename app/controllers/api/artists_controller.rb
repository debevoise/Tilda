class Api::ArtistsController < ApplicationController
    def ARTIST_TYPE = 'Artist'
    
    def show
        @artist = Artist.find(params[:id])
        render :show
    end

end
