# == Schema Information
#
# Table name: reviews
#
#  id             :bigint           not null, primary key
#  text           :text             not null
#  food_rating    :integer          not null
#  service_rating :integer          not null
#  useful         :boolean          default(FALSE), not null
#  funny          :boolean          default(FALSE), not null
#  cool           :boolean          default(FALSE), not null
#  image_url      :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  author_id      :bigint
#  business_id    :bigint
#
class Review < ApplicationRecord
  validates :food_rating, inclusion: { in: (1..5), message: "To submit your review, please select a food star rating for this business." } 
  validates :service_rating, inclusion: { in: (1..5), message: "To submit your review, please select a service star rating for this business." } 
  validates :text, presence: { message: "To submit your review, please explain your rating to others." }

  belongs_to :author,
      foreign_key: :author_id,
      class_name: :User
  belongs_to :business

end
