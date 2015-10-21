require 'rails_helper'

describe ItemsController do
  before do
    @booth = create(:booth)
  end

  let(:json) { JSON.parse(response.body) }

  describe 'Items#create' do
    it 'creates item and returns correct JSON' do
      post :create, format: 'json', booth_id: @booth.id, item:
      {
        name: 'test',
        description: 'this is a test',
        price: BigDecimal.new('1.20')
      }
      expect(response.status).to eq(201)
      expect(response.content_type).to eq(Mime::JSON)
    end
  end

  describe 'GET requests' do
    before do
      @item = create(:item)
    end

    describe 'Items#index' do
      it 'returns correct JSON' do
        get :index, format: 'json'
        expect(response.status).to eq(200)
        expect(json.collect { |i| i['name'] }).to include(@item.name)
        expect(response.content_type).to eq(Mime::JSON)
      end
    end

    describe 'Items#show' do
      it 'returns requested item' do
        get :show, format: 'json', booth_id: @booth.id, id: @item.id
        expect(response.status).to eq(200)
        expect(json['id']).to eq(@item.id)
        expect(response.content_type).to eq(Mime::JSON)
      end
    end
  end
end
