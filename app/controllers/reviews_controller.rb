class ReviewsController < ApplicationController

    def index 
        render json: Review.all
    end

    def create
        review = Review.create!(review_params)
        render json: review
    rescue ActiveRecord::RecordInvalid => e
        render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
    end


    def destroy
        review = Review.find(params[:id])
        review.delete
        head :no_content
    end


    private

    def review_params
        params.permit(:title, :description, :rating, :chef_id, :client_id, :event_id)
    end

end
