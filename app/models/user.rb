class User < ApplicationRecord
    validates :username, uniqueness: true
    validates :username, length: { minimum: 6 }
    has_secure_password

    has_many :muscles
    has_many :bodyparts, through: :muscles

    has_many :bones
    has_many :regions, through: :bones
end
