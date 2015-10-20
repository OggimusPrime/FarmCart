class AddBoothReferenceToMarket < ActiveRecord::Migration
  def change
    add_reference :booths, :market
  end
end
