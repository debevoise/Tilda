sample_songs = @artist.songs.order('RANDOM()').limit(5).to_a
song_ids = sample_songs.map { |song| song.id }

json.artist do
    json.partial! '/api/artists/artist', artist: @artist 
    json.album_ids @artist.albums.pluck(:id)
    json.song_ids song_ids
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
    json.set! song.id do
      json.partial! 'api/songs/song', song: song 
    end
  end
end







