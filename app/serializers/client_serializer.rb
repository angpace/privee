class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :image
end
