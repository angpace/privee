class RequestSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :client_id, :chef_id
end
