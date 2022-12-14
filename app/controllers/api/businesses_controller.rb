class Api::BusinessesController < ApplicationController
    wrap_parameters include: Business.attribute_names + ['yelpId']

  def index
      @businesses = Business.all
      render :index
  end

  def create
      @business = Business.find_by_yelp_id(params[:business][:yelp_id])
      if @business
        @reviews = @business.reviews
        render :show
      else
        @business = Business.create(business_params)
        render :show
      end
  end

  private

  def business_params
      params.require(:business).permit(:yelp_id, :photo, :name)
  end
  
end