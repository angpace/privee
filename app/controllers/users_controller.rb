class UsersController < ApplicationController

    def index 
        render json: User.all
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user
        render json: user
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end

    end

    def create
        user = User.create!(user_params)
        user.send_email 
        render json: user, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        user = User.find(params[:id])
        user.delete
        head :no_content
    end

    def chefs
        chefs = User.where(is_a_chef: true)
        render json: chefs
    end


 private 

 def user_params
    params.permit(:name, :email, :password, :phone, :image, :is_a_chef, :cuisine, :last_job)
 end

end
