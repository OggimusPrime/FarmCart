class AddCountyToMarkets < ActiveRecord::Migration
  def change
    add_column :markets, :county, :string
  end
end
