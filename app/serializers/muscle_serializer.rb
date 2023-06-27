class MuscleSerializer < ActiveModel::Serializer
  attributes :id, :name, :origin, :insertion, :actions, :innervation, :blood_supply, :url, :bodypart_id, :user_id
  belongs_to :bodypart
end