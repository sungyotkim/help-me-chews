class Api::BusinessesController < ApplicationController
  def index
      @businesses = Business.all
      render :index
  end

  def show
      @business = Business.find_by_yelp_id(params[:yelp_id])
      @reviews = @business.reviews
      render :show
  end

  private

  def business_params
      params.require(:business).permit(:name, :address, :city, :state, :zip_code, :category, :phone_number, :website, :price, :hours, :lat, :long)
  end
  
end