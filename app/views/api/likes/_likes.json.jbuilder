json.set! :songs, {}
json.set! :albums, {}
json.set! :artists, {}
json.set! :playlists, {}

likes.each do |like|
    case like.likeable_type
    when "Song"
        json.songs do 
            json.set! like.likeable_id, like.id
        end
    when "Album"
        json.albums do 
            json.set! like.likeable_id, like.id
        end
    when "Artist"
        json.artists do 
            json.set! like.likeable_id, like.id
        end
    when "Playlist"
        json.playlists do 
            json.set! like.likeable_id, like.id
        end
    end
end 