json.extract! playlist, :id, :name
json.songIds playlist.songs.pluck(:id)
json.authorId playlist.user.id

