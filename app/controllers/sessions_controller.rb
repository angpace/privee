class SessionsController < ApplicationController

    def create 
        client = Client.find_by(email: params[:email])
        chef = Chef.find_by(email: params[:email])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id
            render json: client
        elsif chef&.authenticate(params[:password])
            session[:chef_id] = chef.id
            render json: chef
        else 
           render json: {errors: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        client = Client.find_by(email: params[:email])
        chef = Chef.find_by(email: params[:email])
        if client
            session.delete :client_id
            head :no_content
        elsif chef 
            session.delete :chef_id
            head :no_content
        end
    end
end
