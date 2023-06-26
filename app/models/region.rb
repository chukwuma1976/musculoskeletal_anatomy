class Region < ApplicationRecord
    validates :name, presence: true
    has_many :bones 
end
