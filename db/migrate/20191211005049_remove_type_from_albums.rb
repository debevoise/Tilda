class RemoveTypeFromAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :type
  end
end
