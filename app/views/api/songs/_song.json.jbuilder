json.extract! song, :id, :title, :length
json.artist song.artist.name
json.artistId song.artist.id
json.album song.album.title
json.albumId song.album.id
json.songFile url_for(song.song_file)