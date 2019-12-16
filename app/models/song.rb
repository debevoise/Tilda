# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
    validates :title, presence: true

    belongs_to :album

    has_one_attached :song_file
    has_one :artist, through: :album
    has_many :likes, as: :likeable
    has_many :playlist_songs
    has_many :playlists, through: :playlist_songs
end
