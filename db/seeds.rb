# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'taglib'
require 'open-uri'
require 'aws-sdk-s3'

Like.destroy_all
PlaylistSong.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all

album_artwork = [
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa9.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa8.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa7.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa6.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa5.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa4.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa3.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa2.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa1.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa14.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa13.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa12.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa11.jpg',
    'https://tilda-music-seeds.s3.amazonaws.com/album_art/aa10.jpg',
]

# album_attachments = album_artwork.map do |url, idx| 
#     {io: open(url), filename: url.hash.to_s + '.jpg' }
# end

song_files = [
    'https://tilda-music-seeds.s3.amazonaws.com/01+Elephant+Talk.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/01+La+Rue.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/02+Automne.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/02+Frame+By+Frame.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/03+L\'Enfant+Samba.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/03+Matte+Kudasai.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/04+Indiscipline.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/04+Troupeau+Bleu.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/05+Prelude+A+60+Round.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/05+Thela+Hun+Ginjeet.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/06+Go+Round.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/06+The+Sheltering+Sky.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/07+Discipline.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/08+Mary+et+Jeff.mp3',
    'https://tilda-music-seeds.s3.amazonaws.com/09+Huit+Octobre+1971.mp3'
]



4.times do
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

# song_attachments = song_files.map do |url, idx| 
#     {io: open(url), filename:  }
# end

Album.all.each do |album| 
    a_url = album_artwork.sample()
    album.artwork.attach(io: open(a_url), filename: a_url.hash.to_s + '.jpg' )

    8.times do
        s = album.songs.create(
            title: Faker::Book.title, length: rand(30...500)
        )
        url = song_files.sample()
        s.song_file.attach(io: open(url), filename: url.hash.to_s + '.mp3')
    end
end

tilda_guest = User.find_by_email('tildaguest@email.com');

def createPlaylist(user)
    pl = user.authored_playlists.create(name: Faker::Restaurant.name)
   20.times do
        randsong = Song.all.sample
        pl.add_song(randsong)
    end
end

14.times do
    createPlaylist(tilda_guest)
end



# kc = Artist.create(name: 'King Crimson')
# d = kc.albums.create(title: 'Discipline', genre: 'Prog')

# song1 = d.songs.create(title: 'Elephant Talk', length: 300)
# file1 = open('https://tilda-music-seeds.s3.amazonaws.com/01+Elephant+Talk.mp3')
# song1.song_file.attach(io: file1, filename: 'elephanttalk.mp3')

# song2 = d.songs.create(title: 'Frame by Frame', length: 300)
# file2 = open('https://tilda-music-seeds.s3.amazonaws.com/02+Frame+By+Frame.mp3')
# song2.song_file.attach(io: file2, filename: 'framebyframe.mp3')

# song3 = d.songs.create(title: 'Matte Kudasai', length: 300)
# file3 = open('https://tilda-music-seeds.s3.amazonaws.com/03+Matte+Kudasai.mp3')
# song3.song_file.attach(io: file3, filename: 'mattekudasai.mp3')

# song4 = d.songs.create(title: 'Indiscipline', length: 300)
# file4 = open('https://tilda-music-seeds.s3.amazonaws.com/04+Indiscipline.mp3')
# song4.song_file.attach(io: file4, filename: 'indiscipline.mp3')


# User.create(
#     name: 'Tilda Guest', 
#     email: 'tildaguest@email.com', 
#     password: 'tildaguest', 
#     birth_date: '04/06/1995', 
#     gender: 'non-binary')

# s3 = Aws::S3.new(
#   :access_key_id => '',
#   :secret_access_key => '')

#     # client = Aws::S3::Client.new(
#     #     region: 'us-east-1', 
#     #     :access_key_id => '',
#     #     :secret_access_key => '')


#     bucket = client.get_bucket_acl({ bucket: 'tilda-music-seeds'})
#     puts bucket

# bucket = s3.buckets['tilda-music-seeds']
# puts bucket.name

# bucket.objects.each do |obj|
#   puts obj.key + ' ' + obj.last_modified.to_s
# end


# def add_song_to_library(filepath) 
#     song = nil
#     open_file = open(filepath)
    
#     # kc = Artist.create(name: 'King Crimson')
#     # d = kc.albums.create(title: 'Discipline')
#     # song = d.songs.create(title: 'Elephant Talk', length: 300)

#     TagLib::FileRef.open(filepath) do |file|

#         properties = file.audio_properties
#         tag = file.tag
#         return nil if !tag || !properties
#         #Song info
#         title = tag.title
#         track_number = tag.track
#         length = properties.length

#         #Album info
#         albumname = tag.album
#         genre = tag.genre
#         year = tag.year

#         #Artist info
#         artistname = tag.artist

#         #Establish artist
#         artist = Artist.find_by_name(artistname)
#         artist = Artist.new(name: artistname) if !artist

#         #Establish album
#         album = artist.albums.find_by(title: albumname)
#         album = artist.albums.new(title: albumname, genre: genre, year: year) if !album

#         #Establish song
#         song = album.songs.new(title: title, track_number: track_number, length: length)

#         if artist.valid? && album.valid? && song.valid?
            
#             artist.save
#             album.save
#             song.save
#         else
#             song = nil
#         end
#     end  

#     if song && open_file
#         io = open_file
#         # filename = File.basename(filepath)
#         song.song_file.attach(io: io, filename: 'elephanttalk.mp3')
#     end
# end


# # Aws.config[:credentials]
# resp = s3.list_objects(bucket: 'tilda-music-seeds', max_keys: 2)
# resp.contents.each do |object|
#   puts "#{object.key} => #{object.etag}"
# end


# add_song_to_library("https://tilda-music-seeds.s3.amazonaws.com/01+Elephant+Talk.mp3")

# MUSIC_SEED_DIRECTORY = '/Users/work/Desktop/active_storage_demo/simon_music_seeds/'

# Dir.foreach(MUSIC_SEED_DIRECTORY) do |filename|
#     next if filename == '.' || filename == '..'
#     songpath = MUSIC_SEED_DIRECTORY + filename
#     add_song_to_library(songpath)
# end


