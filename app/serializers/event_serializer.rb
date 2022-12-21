class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :amount_of_people, :user_id, :description, :date, :cuisine
end
