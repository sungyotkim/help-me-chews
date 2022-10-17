class Api::BusinessesController < ApplicationController
    wrap_parameters include: Business.attribute_names + ['yelpId']

  def index
      @businesses = Business.all
      render :index
  end

  def show
    p params
      @business = Business.find_by_yelp_id(params[:yelp_id])
      if @business
        @reviews = @business.reviews
        render :show
      else
        @business = Business.create(yelp_id: params[:yelp_id])
        render :show
      end
  end

  private

  # def business_params
  #     params.require(:business).permit(:yelp_id)
  #     # params.require(:business).permit(:yelp_id)
  # end
  
end