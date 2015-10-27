require 'faker'

# Create 1 Market
# 1.times do
#   Market.create!(
#     name: 'Test Market',
#     address: Faker::Address.street_address,
#     phone: Faker::PhoneNumber.phone_number,
#     website: Faker::Internet.domain_name
#   )
# end

markets = Market.all
# Create Booths
16_000.times do
  Booth.create!(
    market_id: markets.sample.id,
    name: Faker::Company.name
  )
end

booths = Booth.all

# Create Items
160_000.times do
  Item.create!(
    booth_id: booths.sample.id,
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price
  )
end

puts 'Seed finished'
puts "#{Market.count} markets created"
puts "#{Booth.count} booths created."
puts "#{Item.count} items created."
