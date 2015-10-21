class ItemsController < ApplicationController

  def index
    respond_with Item.all
  end

  def create
    booth = Booth.find(params[:booth_id])
    item = booth.items.create(item_params)
    respond_with booth, item
  end

  def show
    respond_with Item.find(params[:id])
  end

  private

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end
end
