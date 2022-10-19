@reviews.each do |review|
      json.set! review.id do
            json.merge! review.attributes

            json.user do
                  json.extract! review.author, :id, :first_name, :last_name, :city, :state, :image_url, :not_yelp_user
            end

            json.business do
                  json.extract! review.business, :photo
            end
      end
end