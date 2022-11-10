json.partial! '/api/businesses/business', business: @business

json.reviews do
    json.array! @reviews do |review|
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

            json.reviews do
                json.array! review.author.reviews do |review|
                    json.merge! review.attributes
                end
            end
        end
    end
end