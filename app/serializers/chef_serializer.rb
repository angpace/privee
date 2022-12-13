class ChefSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :image, :cuisine, :last_job
end
