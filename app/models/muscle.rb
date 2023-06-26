class Muscle < ApplicationRecord
    validates :name, :origin, :insertion, :action, :innervation, :blood_supply, presence: true
    belongs_to :bodypart
end
