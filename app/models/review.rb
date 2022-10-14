class Review < ApplicationRecord
  validates :food_rating, inclusion: { in: (1..5), message: "To submit your review, please select a food star rating for this business." } 
  validates :service_rating, inclusion: { in: (1..5), message: "To submit your review, please select a service star rating for this business." } 
  validates :text, presence: { message: "To submit your review, please explain your rating to others." }

  belongs_to :author,
      foreign_key: :author_id,
      class_name: :User
  belongs_to :business
end
