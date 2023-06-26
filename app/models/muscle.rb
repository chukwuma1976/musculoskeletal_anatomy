class Muscle < ApplicationRecord
    validates :name, :origin, :insertion, :actions, :innervation, :blood_supply, presence: true
    validates :name, uniqueness: true
    belongs_to :bodypart
    belongs_to :user
end
