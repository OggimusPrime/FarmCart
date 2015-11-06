class AddUserIdToBooths < ActiveRecord::Migration
  def change
    add_column :booths, :user_id, :integer
  end
end
