class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount_of_people, :date, :description
  has_one :client
end
