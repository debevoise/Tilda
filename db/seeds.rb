# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'taglib'
require 'open-uri'

Playlist.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all

User.create(
    name: 'Tilda Guest', 
    email: 'tildaguest@email.com', 
    password: 'tildaguest', 
    birth_date: '04/06/1995', 
    gender: 'non-binary')




def add_song_to_library(filepath) 
    song = nil
    
    TagLib::FileRef.open(filepath) do |fileref|
        properties = fileref.audio_properties
        tag = fileref.tag
        return nil if !tag || !properties
        #Song info
        title = tag.title
        track_number = tag.track
        length = properties.length

        #Album info
        albumname = tag.album
        genre = tag.genre
        year = tag.year

        #Artist info
        artistname = tag.artist

        #Establish artist
        artist = Artist.find_by_name(artistname)
        artist = Artist.new(name: artistname) if !artist

        #Establish album
        album = artist.albums.find_by(title: albumname)
        album = artist.albums.new(title: albumname, genre: genre, year: year) if !album

        #Establish song
        song = album.songs.new(title: title, track_number: track_number, length: length)

        if artist.valid? && album.valid? && song.valid?
            
            artist.save
            album.save
            song.save
        else
            song = nil
        end
    end  

    if song
        io = File.open(filepath)
        filename = File.basename(filepath)
        song.song_file.attach(io: io, filename: filename)
    end
end

MUSIC_SEED_DIRECTORY = '/Users/work/Desktop/active_storage_demo/simon_music_seeds/'

Dir.foreach(MUSIC_SEED_DIRECTORY) do |filename|
    next if filename == '.' || filename == '..'
    songpath = MUSIC_SEED_DIRECTORY + filename
    add_song_to_library(songpath)
end




tilda_guest = User.find(1);

def createPlaylist(user)
    pl = user.authored_playlists.create(name: Faker::Restaurant.name)
    15.times do
        randsong = Song.all.sample
        pl.add_song(randsong)
    end
end

14.times do
    createPlaylist(tilda_guest)
end

# 20.times do
#     Artist.create(
#         name: Faker::Music.band,
#         biography: Faker::Quote.famous_last_words
#     )
# end

# Artist.all.each do |artist|
#     3.times do 
#         year = rand(1900..2019)
#         artist.albums.create(
#             title: Faker::Music.album,
#             genre: Faker::Music.genre,
#             year: year
#         )
#     end
# end

# Album.all.each do |album| 
#     8.times do
#         album.songs.create(
#             title: Faker::Book.title
#         )
#     end
# end

