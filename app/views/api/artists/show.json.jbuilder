
sample_songs = @artist.songs.order('RANDOM()').limit(5).to_a
song_ids = sample_songs.map { |song| song.id }
# sample_songs = sample_songs.to_a

# 5.times do 
#   song = @artist.songs.
#   sample_songs << song
#   song_ids << song.id
# end

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
  # debugger
  json.songs do 
    json.set! song.id do
      json.partial! 'api/songs/song', song: song 
    end
  end
end







