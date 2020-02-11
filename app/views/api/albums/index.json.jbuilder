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
end