require 'csv'

# This task seeds database with csv file of all California Farmers Markets
namespace :csv do
  desc 'Imports a CSV file into the ActiveRecord table'
  task import: :environment do
    csv_file_path = 'lib/tasks/farmers_markets.csv'
    count = 0
    CSV.foreach(csv_file_path, headers: true) do |row|
      Market.create!(row.to_hash)
      count += 1
      puts count
    end
  end
end
