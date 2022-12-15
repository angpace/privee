class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :image, :is_a_chef, :cuisine, :last_job
end
