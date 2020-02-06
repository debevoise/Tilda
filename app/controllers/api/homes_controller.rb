

class Api::HomesController < ApplicationController 
    def home
        @artists = Artist.all.order('RANDOM()').limit(10).to_a
        @albums = Album.all.order('RANDOM()').limit(10).includes(:artist).to_a
        @playlists = Playlist.all.order('RANDOM()').limit(10).to_a

        render 'api/homes/home'
    end
end
