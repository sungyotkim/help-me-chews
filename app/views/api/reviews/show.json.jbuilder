# json.review do 
      json.merge! @review.attributes

      json.user do
            json.extract! @review.author, :id, :first_name, :last_name, :city, :state, :image_url, :not_yelp_user
      end

      json.business do
            json.extract! @review.business, :photo, :name, :yelp_info, :yelp_id
      end
# end