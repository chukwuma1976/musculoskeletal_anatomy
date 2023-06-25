class MuscleSerializer < ActiveModel::Serializer
  attributes :id, :name, :origin, :insertion, :action, :innervation, :blood_supply, :url, :bodypart_id
  belongs_to :region
end