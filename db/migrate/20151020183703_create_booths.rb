class CreateBooths < ActiveRecord::Migration
  def change
    create_table :booths do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
