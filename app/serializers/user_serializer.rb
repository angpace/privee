class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :phone, :image, :is_a_chef, :cuisine, :last_job
end
