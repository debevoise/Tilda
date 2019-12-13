json.playlist do
    json.partial! 'api/playlists/playlist', playlist: @playlist
end

@playlist.songs.each do |song|
  json.songs do
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end

