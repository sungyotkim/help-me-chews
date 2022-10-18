require 'dotenv'

class ReviewsController < ApplicationController
  def get_reviews_by_business_id
    # key = Dotenv.load('.env')["yelp_api_key"]
    key = ENV["yelp_api_key"]
    url = "https://api.yelp.com/v3/businesses/#{params[:id]}/reviews"
    response = HTTParty.get(url, headers: {"Authorization" => "Bearer #{key}"})
    render json: response
  end
end