class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:user_id, :likeable_id, :likeable_type], unique: true
  end
end
