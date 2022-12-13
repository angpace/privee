class ClientsController < ApplicationController

    def index
        render json: Client.all
     end
      
     def show
        client = Client.find(params[:id])
        render json: client
     end
      
     def create
        client = Client.create!(client_params)
        render json: client
     end
      
      
     private
      
     def client_params
        params.permit(:name, :email, :password, :phone, :image)
     end

end
