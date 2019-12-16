json.extract! user, :id, :email, :name
json.likes do
    json.partial! 'api/likes/likes.json', likes: user.likes
end
json.authored_playlists do
    json.array! user.authored_playlists.pluck(:id)
end