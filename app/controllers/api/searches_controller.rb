class Api::SearchesController < ApplicationController
    def show
        @query = ''
        @artists = Artist.all.sample(4)
        @albums = Album.all.sample(4)
        @songs = Song.all.sample(10)
        @playlists = Playlist.all.sample(4)
        render 'api/searches/search'
    end
    
    def search
        @query = params[:query].downcase
        @artists = Artist.where('lower(name) like ?',  "%#{@query}%")
        @albums = Album.where('lower(title) like ?',  "%#{@query}%")
        @songs = Song.where('lower(title) like ?',  "%#{@query}%")
        @playlists = Playlist.where('lower(name) like ?',  "%#{@query}%")

        render 'api/searches/search'
    end
    
end