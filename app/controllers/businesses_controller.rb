require 'dotenv'

class BusinessesController < ApplicationController
  def get_businesses
    # key = Dotenv.load('.env')["yelp_api_key"]
    key = ENV["yelp_api_key"]
    url = "https://api.yelp.com/v3/businesses/search?"
    if params[:term] != "null" then url += "term=#{params[:term]}&" end
    if params[:location] != "null" then url += "location=#{params[:location]}&" end
    if params[:radius] != "null" then url += "radius=#{params[:radius]}&" end
    if params[:price] != "null" then url += "price=#{params[:price]}&" end
    if params[:open_now] != "null" then url += "open_now=true&" end
    if params[:gender_neutral_bathrooms] != "null" then url += "attributes=gender_neutral_bathrooms&" end
    if params[:wheelchair_accessible] != "null" then url += "attributes=wheelchair_accessible&" end
    if params[:limit] != "null" then url += "limit=#{params[:limit]}&" end
    if params[:offset] != "null" then url += "offset=#{params[:offset]}&" end
    if params[:hot_and_new] != "null" then url += "attributes=hot_and_new&" end
    url[-1] = ''
    response = HTTParty.get(url, headers: {"Authorization" => "Bearer #{key}"}).parsed_response
    render json: response
  end

  def get_business_by_id
    # key = Dotenv.load('.env')["yelp_api_key"]
    key = ENV["yelp_api_key"]
    url = "https://api.yelp.com/v3/businesses/#{params[:id]}"
    response = HTTParty.get(url, headers: {"Authorization" => "Bearer #{key}"}).parsed_response
    render json: response
  end
end