# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  year       :integer
#  genre      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :title, presence: true
    
    has_one_attached :artwork
    has_many :songs, dependent: :destroy
    belongs_to :artist
    has_many :likes, as: :likeable
end
