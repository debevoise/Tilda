# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dir.foreach('/Users/work/Desktop/active_storage_demo/simon_music_seeds/') do |song|
  next if song == '.' or filename == '..'
  # Do work on the remaining files & directories
end

require 'taglib'

# Load a file
TagLib::FileRef.open('/Users/work/Desktop/active_storage_demo/simon_music_seeds/02 The World It Softly Lulls.m4a') do |fileref|
  unless fileref.null?
    
    tag = fileref.tag
    puts tag
    
    puts tag.title   #=> "Wake Up"
    puts tag.artist  #=> "Arcade Fire"
    puts tag.album   #=> "Funeral"
    puts tag.year    #=> 2004
    puts tag.track   #=> 7
    puts tag.genre   #=> "Indie Rock"
    puts tag.comment #=> nil

    puts properties = fileref.audio_properties
    puts properties.length  #=> 335 (song length in seconds)
  end
end 


Song.destroy_all
Album.destroy_all
Artist.destroy_all

User.create(
    name: 'Tilda Guest', 
    email: 'tildaguest@email.com', 
    password: 'tildaguest', 
    birth_date: '04/06/1995', 
    gender: 'non-binary')

20.times do
    Artist.create(
        name: Faker::Music.band,
        biography: Faker::Quote.famous_last_words
    )
end

Artist.all.each do |artist|
    3.times do 
        year = rand(1900..2019)
        artist.albums.create(
            title: Faker::Music.album,
            genre: Faker::Music.genre,
            year: year
        )
    end
end

Album.all.each do |album| 
    8.times do
        album.songs.create(
            title: Faker::Book.title
        )
    end
end

tilda_guest = User.find(14);

def createPlaylist(user)
    pl = user.authored_playlists.create(name: Faker::Restaurant.name)
    10.times do
        randsong = Song.all.sample
        pl.add_song!(randsong)
    end
end

5.times do
    createPlaylist(tilda_guest)
end


