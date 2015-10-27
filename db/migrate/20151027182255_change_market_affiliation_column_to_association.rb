class ChangeMarketAffiliationColumnToAssociation < ActiveRecord::Migration
  def change
    rename_column :markets, :affiliation, :association_name
  end
end
