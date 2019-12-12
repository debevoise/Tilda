
json.album do
    json.partial! 'api/albums/album', album: @album 
    json.songIds @album.songs.pluck(:id)
end

json.artist do
    json.partial! 'api/artists/artist', artist: @album.artist
end 

@album.songs.includes(:album).each do |song|
  json.songs do
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end
