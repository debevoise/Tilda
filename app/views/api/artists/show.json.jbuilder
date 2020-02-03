
sample_songs = []
5.times do 
  sample_songs << @artist.songs.sample 
end


json.artist do
    json.partial! '/api/artists/artist', artist: @artist 
    json.album_ids @artist.albums.pluck(:id)
    json.song_ids do 
      sample_songs.map { |song| song.id }
    end
end

@artist.albums.includes(:artist).each do |album|
  json.albums do
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
end

sample_songs.each do |song|
  json.songs do 
    json.set song.id do
      json.partial! 'api/songs/song', song: song 
    end
  end
end







