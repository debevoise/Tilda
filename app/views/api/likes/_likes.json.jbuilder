# songs = []
# albums = []
# artists = []
# playlists = []

json.set! :songs, {}
json.set! :albums, {}
json.set! :artists, {}
json.set! :playlists, {}


likes.each do |like|
    case like.likeable_type
    when "Song"
        json.songs do 
            json.set! like.likeable_id, true
        end
    when "Album"
        json.albums do 
            json.set! like.likeable_id, true
        end
    when "Artist"
        json.artists do 
            json.set! like.likeable_id, true
        end
    when "Playlist"
        json.playlists do 
            json.set! like.likeable_id, true
        end
    end
end 

# likes.each do |like|
#     case like.likeable_type
#     when "Song"
#         songs << like.likeable_id
#     when "Album"
#         albums << like.likeable_id
#     when "Artist"
#         artists << like.likeable_id
#     when "Playlist"
#         playlists << like.likeable_id
#     end
# end 

# json.songs songs
# json.albums albums
# json.artists artists
# json.playlists playlists