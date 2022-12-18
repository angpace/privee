class Request < ApplicationRecord
    belongs_to :event
    belongs_to :client, :class_name => "User", :foreign_key => 'client_id'
    belongs_to :chef, :class_name => "User", :foreign_key => 'chef_id'

    validates :event_id, uniqueness: true
end
