class Request < ApplicationRecord
    belongs_to :event
    has_many :clients, :class_name => "User", :foreign_key => 'client_id'
    has_many :chefs, :class_name => "User", :foreign_key => 'chef_id'
end
