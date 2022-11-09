class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['foodRating'] + ['serviceRating'] + ['businessId'] + ['authorId'] + ["photos"]
    before_action :require_logged_in, only: [:show, :create, :update, :destroy]
    require 'json'

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        new_review = {text: review_params[:text], food_rating: review_params[:food_rating], service_rating: review_params[:service_rating], author_id: review_params[:author_id], business_id: review_params[:business_id]}
        @review = Review.new(new_review)
        if review_params[:photos]
            review_params[:photos].each do |photo|
                @review.photos.attach(photo)
            end
        end

        if @review.save
            render :show
        else
            render json: @review.errors
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render :show
        else
            render json: ["Ran into an error, unable to delete"]
        end
    end

    private

    def review_params
        params.require(:review).permit(:id, :text, :food_rating, :service_rating, :business_id, :author_id, photos: [])
    end
end