@artists.each do |artist|
    json.set! artist.id do
        json.partial! 'api/artists/artist', artist: artist
        json.albumIds artist.albums.pluck(:id)
    end
end