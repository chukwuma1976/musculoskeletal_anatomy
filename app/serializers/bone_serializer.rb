class BoneSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :url, :region_id, :user_id
  belongs_to :region
end