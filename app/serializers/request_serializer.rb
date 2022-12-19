class RequestSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :client_id, :chef_id, :event, :accepted
  # attribute :event 

  # def event
  #   event = Event.find_by(id: self.event)
  #   render json: event
  # end

end
