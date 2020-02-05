class Api::HomesController < ApplicationController 
    def home
        @artists = Artist.all.order('RANDOM()').limit(10)
        @albums = Album.all.order('RANDOM()').limit(10)
        @playlists = Playlist.all.order('RANDOM()').limit(10)

        render 'api/homes/home'
    end
end
