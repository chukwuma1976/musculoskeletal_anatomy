class BodypartSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :muscles
end
