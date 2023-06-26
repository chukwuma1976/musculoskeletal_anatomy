class Muscle < ApplicationRecord
    validates :name, :origin, :insertion, :actions, :innervation, :blood_supply, presence: true
    belongs_to :bodypart
end
