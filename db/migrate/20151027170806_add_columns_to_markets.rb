class AddColumnsToMarkets < ActiveRecord::Migration
  def change
    add_column :markets, :location, :string
    add_column :markets, :street, :string
    add_column :markets, :cross_st_1, :string
    add_column :markets, :cross_st_2, :string
    add_column :markets, :zip, :string
    add_column :markets, :month_open, :string
    add_column :markets, :month_closed, :string
    add_column :markets, :days, :string
    add_column :markets, :frequency, :string
    add_column :markets, :hour_open, :time
    add_column :markets, :hour_closed, :time
    add_column :markets, :association, :string
    add_column :markets, :email, :string
    add_column :markets, :latitude, :decimal, precision: 10, scale: 6
    add_column :markets, :longitude, :decimal, precision: 10, scale: 6
    add_column :markets, :site_type, :string
  end
end
