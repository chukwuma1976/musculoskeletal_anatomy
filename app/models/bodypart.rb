class Bodypart < ApplicationRecord
    validates :name, presence: true
    has_many :muscles
end
