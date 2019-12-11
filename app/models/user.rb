# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  gender          :string           not null
#  birth_date      :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    include BCrypt
    attr_reader :password
    validates :name, :email, :password_digest, :session_token, :birth_date, presence: true
    validates :gender, inclusion: { 
        in: %w(male female non-binary) }
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 8 }, allow_nil: true
    after_initialize :ensure_session_token

    has_many :likes, dependent: :destroy
    has_many :artists, through: :likes, source: :likeable, source_type: 'Artist'
    has_many :albums, through: :likes, source: :likeable, source_type: 'Album'
    has_many :songs, through: :likes, source: :likeable, source_type: 'Song'
    # has_many :followed_playlists, through: :likes, source: :likeable, source_type: 'Playlist'
    # has_many :authored_playlists, class_name: :Playlist

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password) 
        user = User.find_by_email(email)
        user && user.valid_password(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = Password.create(password)
        self.password_digest
    end

    def valid_password(otherPass)
        digest = Password.new(self.password_digest)
        digest == otherPass
    end
end
