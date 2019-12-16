# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :name, presence: :true
  # validates :name, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs

  def add_song(song)
    self.playlist_songs.create(song_id: song.id)
  end
end
