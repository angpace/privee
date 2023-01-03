class Event < ApplicationRecord
    belongs_to :user
    has_many :reviews, dependent: :destroy
    has_many :requests, dependent: :destroy

    validates :cuisine, :date, :amount_of_people, presence: true


end
