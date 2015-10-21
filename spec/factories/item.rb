FactoryGirl.define do
  factory :item do
    name 'Test item'
    description 'This is a test'
    price BigDecimal.new('1.20')
    booth_id nil
  end
end
