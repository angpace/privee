class EventsController < ApplicationController

     def index
            render json: Event.all
     end

     def show
        event = Event.find(params[:id])
        render json: event
     end

     def create
        event = Event.create!(event_params)
        render json: event
     end

     def updated
        event = Event.find(params[:id])
        event.update(event_params)
        render json: event
     end

     def destroy
        event = Event.find(params[:id])
        event.delete
        head :no_content
     end

     private 

     def event_params
        params.permit(:title, :amount_of_people, :user_id, :description)
     end
end
