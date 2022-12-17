class RequestsController < ApplicationController

    def show
        requests = Request.find(params[:id])
        render json: requests
    end

    def create 
        new_request = Request.create!(request_params)
        render json: new_request
    end

    private 

    def request_params
        params.permit(:event_id, :client_id, :chef_id)
    end
end
