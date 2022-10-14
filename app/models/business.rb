class Business < ApplicationRecord
  validates :yelp_id, presence: true, uniqueness: true

  has_many :reviews,
  foreign_key: :business_id,
  dependent: :destroy
end
