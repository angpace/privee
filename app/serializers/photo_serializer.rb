class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image, :description
end
