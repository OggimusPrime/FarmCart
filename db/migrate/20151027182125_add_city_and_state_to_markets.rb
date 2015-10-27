class AddCityAndStateToMarkets < ActiveRecord::Migration
  def change
    add_column :markets, :city, :string
    add_column :markets, :state, :string
  end
end
