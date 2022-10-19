# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  yelp_id    :string           not null
#  photo      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Business < ApplicationRecord
  validates :yelp_id, presence: true, uniqueness: true
  validates :photo, :name, presence: true
  
  has_many :reviews,
  foreign_key: :business_id,
  dependent: :destroy

  def self.find_by_yelp_id(yelp_id)
    business = Business.find_by(yelp_id: yelp_id)
    business ? business : nil
  end
end
