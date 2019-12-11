class DeleteUsersColumnFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :user_id
    add_reference :likes, :user
  end
end
