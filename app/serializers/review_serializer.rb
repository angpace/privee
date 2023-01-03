class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :client_id, :chef_id, :event_id, :event
end
