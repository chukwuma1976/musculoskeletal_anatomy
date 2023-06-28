class Bone < ApplicationRecord
    validates :name, :description, presence: true
    validates :name, uniqueness: true
    belongs_to :region 
end
