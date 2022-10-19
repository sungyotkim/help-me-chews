@businesses.each do |business|
  json.set! business.id do
      json.partial! 'business', business: business

      json.reviews do
        json.array! business.reviews do |review|
            json.merge! review.attributes
    
            json.user do
                json.extract! review.author, :id, :first_name, :last_name, :city, :state, :image_url, :not_yelp_user
            end
        end
    end
  end
end