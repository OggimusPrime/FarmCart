class BoothsController < ApplicationController

  def index
    respond_with Booth.all
  end

  def create
    market = Market.find(params[:market_id])
    booth = market.booths.create(booth_params)
    respond_with market, booth
  end

  def show
    respond_with Booth.find(params[:id])
  end

  private

  def booth_params
    params.require(:booth).permit(:name)
  end
end
