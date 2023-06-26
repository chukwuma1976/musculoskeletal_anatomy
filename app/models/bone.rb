class Bone < ApplicationRecord
    validates :name, :description, presence: true
    belongs_to :region 
end
