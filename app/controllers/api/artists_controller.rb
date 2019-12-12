class Api::ArtistsController < ApplicationController
    def show
        @artist = Artist.find(params[:id])
        render :show
    end
end
