class EventsController < ApplicationController

     def index
            render json: Event.all
     end

     def show
        event = Event.find(params[:id])
        user = User.find(params[:user_id])
        render json: event, include: :user
     end

     def create
        event = Event.create!(event_params)
        render json: event
      rescue ActiveRecord::RecordInvalid => e
         render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
     end

     def update
        event = Event.find(params[:id])
        event.update(event_params)
        render json: event
     end

     def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
     end

     

     private 

     def event_params
        params.permit(:title, :amount_of_people, :user_id, :description, :date, :cuisine)
     end
end
