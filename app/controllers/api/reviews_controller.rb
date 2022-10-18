class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['foodRating'] + ['serviceRating'] + ['businessId'] + ['authorId']
    before_action :require_logged_in, only: [:show, :create, :update, :destroy]

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
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
        params.require(:review).permit(:id, :text, :food_rating, :service_rating, :useful, :funny, :cool, :business_id, :author_id)
    end
end