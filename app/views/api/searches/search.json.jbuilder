json.searchResult do
    json.query @query
    json.artistIds @artists.pluck(:id)
    json.albumIds @albums.pluck(:id)
    json.songIds @songs.pluck(:id)
    json.playlistIds @playlists.pluck(:id)
end

json.artists do
    @artists.each do |artist|
        json.set! artist.id do
            json.partial! 'api/artists/artist', artist: artist
            json.albumIds artist.albums.pluck(:id)
        end
    end
end

@albums.each do |album|
    json.albums do
        json.set! album.id do
            json.partial! 'api/albums/album', album: album
            json.songIds album.songs.pluck(:id)
        end
    end
    json.artists do
        json.set! album.artist.id do
            json.partial! 'api/artists/artist', artist: album.artist
            json.albumIds album.artist.albums.pluck(:id)
        end
    end
        # IF ANYTHING GOES WRONG MOVE JSON.ARTISTS INTO ALBUM ID AREA
end

json.songs do
    @songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
        end
    end
end

json.playlists do
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.partial! 'api/playlists/playlist', playlist: playlist
        end
    end
end
