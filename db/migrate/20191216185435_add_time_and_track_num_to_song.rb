class AddTimeAndTrackNumToSong < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :track_number, :integer
    add_column :songs, :length, :integer, null: false
  end
end
