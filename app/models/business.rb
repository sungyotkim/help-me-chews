class Business < ApplicationRecord
  validates :yelp_id, presence: true, uniqueness: true
  
  has_many :reviews,
  foreign_key: :business_id,
  dependent: :destroy

  def self.find_by_yelp_id(yelp_id)
    business = Business.find_by(yelp_id: yelp_id)
    business ? business : nil
  end
end
