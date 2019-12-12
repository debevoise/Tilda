json.extract! user, :id, :email, :name
json.likes do
    json.partial! 'api/likes/likes.json', likes: user.likes
end