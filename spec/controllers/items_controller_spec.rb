require 'rails_helper'

describe ItemsController do
  before do
    @booth = create(:booth)
  end

  describe 'Items#create' do
    it 'creates item and returns json response' do
      # debugger
      post :create, format: 'json', booth_id: @booth.id, item:
      {
        name: 'test',
        description: 'this is a test',
        price: BigDecimal.new('1.20')
      }
      expect(response.status).to eq(201)
      assert_equal Mime::JSON, response.content_type
    end
  end
end
