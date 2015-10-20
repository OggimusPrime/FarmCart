class MarketsController < ApplicationController

  def index
    respond_with Market.all
  end

  def show
    respond_with Market.find(params[:id])
  end
end
