class ChangeItemImagetoImage < ActiveRecord::Migration
  def change
    rename_column :items, :item_image, :image
  end
end
