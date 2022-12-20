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
        client = User.find_by(id: request.client_id)
        chef = User.find_by(id: request.chef_id)
        request.update(request_params)
        if ( request.accepted === true)
            client.request_accepted(chef)
         end
        render json: request
    end

    def create 
        new_request = Request.create!(request_params)
        chef = User.find_by(id: params[:chef_id])
        client = User.find_by(id: params[:client_id])
        chef.got_a_request(client)
        render json: new_request
    end

    def destroy
        request = Request.find(params[:id])
        client = User.find_by(id: request.client_id)
        chef = User.find_by(id: request.chef_id)
        client.request_denied(chef)
        request.delete
        head :no_content
    end

    private 

    def request_params
        params.permit(:event_id, :client_id, :chef_id, :accepted)
    end
end
