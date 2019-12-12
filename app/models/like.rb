# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :bigint
#

class Like < ApplicationRecord
  belongs_to :likeable, polymorphic: true
  validates :user, uniqueness: { scope: [:likeable_type, :likeable_id] }

  belongs_to :user
end
