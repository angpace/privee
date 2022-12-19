class RequestsController < ApplicationController

    def index
        # client = User.find(params[:client_id])
        render json: Request.all, include: :event
    end 

    def show
        event = Event.find(params[:event_id])
        # client = User.find(params[:client_id])
        requests = Request.find(params[:id])
        render json: requests, include: [:event, :client]
    end

    def update 
        request = Request.find(params[:id])
        request.update(request_params)
        render json: request
    end

    def create 
        new_request = Request.create!(request_params)
        render json: new_request
    end

    def destroy
        request = Request.find(params[:id])
        request.delete
        head :no_content
    end

    private 

    def request_params
        params.permit(:event_id, :client_id, :chef_id, :accepted)
    end
end
