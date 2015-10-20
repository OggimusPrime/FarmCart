class AddItemReferenceToBooth < ActiveRecord::Migration
  def change
    add_reference :items, :booth
  end
end
