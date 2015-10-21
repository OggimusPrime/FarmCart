require 'rails_helper'

describe MarketsController do
  before do
    @market = create(:market)
  end

  let(:json) { JSON.parse(response.body) }

  describe 'GET requests' do
    describe 'Markets#index' do
      it 'returns correct JSON' do
        get :index, format: 'json'
        expect(response.status).to eq(200)
        expect(json.collect { |i| i['name'] }).to include(@market.name)
        expect(response.content_type).to eq(Mime::JSON)
      end
    end

    describe 'Markets#show' do
      it 'returns requested booth' do
        get :show, format: 'json', id: @market.id
        expect(response.status).to eq(200)
        expect(json['id']).to eq(@market.id)
        expect(response.content_type).to eq(Mime::JSON)
      end
    end
  end
end
