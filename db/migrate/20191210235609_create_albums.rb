class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.integer :year
      t.string :genre
      t.string :type, default: 'album'

      t.timestamps
    end

    add_index :albums, :artist_id
    add_index :albums, :title
  end
end
