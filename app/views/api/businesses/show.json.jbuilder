
  json.partial! '/api/businesses/business', business: @business

  @business.reviews.includes(:author).each do |review|
      json.reviews do
          json.set! review.id do
              json.partial! '/api/reviews/review', review: review

              json.author do
                  json.extract! review.author, :id, :first_name, :last_name
              end
          end
      end
  end
