# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  biography  :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, presence: true

    has_many :albums, dependent: :destroy
    has_many :songs, through: :albums
    has_many :follows, as: :likeable
end
