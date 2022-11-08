@reviews.each do |review|
      json.set! review.id do
            json.merge! review.attributes
            if review.photos.attached? 
                  json.photos do 
                        json.array! review.photos do |photo|
                              json.extract! photo, :url
                        end
                  end
            end

            json.user do
                  json.extract! review.author, :id, :first_name, :last_name, :city, :state, :image_url, :not_yelp_user
            end

            json.business do
                  json.extract! review.business, :photo, :name, :yelp_info, :yelp_id
            end
      end
end