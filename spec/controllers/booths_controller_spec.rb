require 'rails_helper'

describe BoothsController do
  before do
    @market = create(:market)
    @booth = create(:booth)
    @booth.market_id = @market.id
  end

  let(:json) { JSON.parse(response.body) }

  describe 'GET requests' do
    describe 'Booths#index' do
      it 'returns correct JSON' do
        get :index, format: 'json', market_id: @market.id
        expect(response.status).to eq(200)
        expect(json.collect { |i| i['name'] }).to include(@booth.name)
        expect(response.content_type).to eq(Mime::JSON)
      end
    end

    describe 'Booths#show' do
      it 'returns requested booth' do
        get :show, format: 'json', market_id: @market.id, id: @booth.id
        expect(response.status).to eq(200)
        expect(json['id']).to eq(@booth.id)
        expect(response.content_type).to eq(Mime::JSON)
      end
    end
  end

  describe 'Booths#create' do
    it 'creates booth and returns correct JSON' do
      post :create, format: 'json',
      market_id: @market.id, booth:
      {
        name: 'test'
      }
      expect(response.status).to eq(201)
      expect(response.content_type).to eq(Mime::JSON)
    end
  end
end
