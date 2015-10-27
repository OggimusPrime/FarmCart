class ChangeMarketAssociationColumnToAffiliation < ActiveRecord::Migration
  def change
    rename_column :markets, :association, :affiliation 
  end
end
