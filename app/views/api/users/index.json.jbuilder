@users.each do |user|
  json.set! user.id do 
    json.merge! user.attributes

    json.reviews do
      json.array! user.reviews do |review|
        json.merge! review.attributes
        if review.photos.attached? 
          json.photos do 
                json.array! review.photos do |photo|
                      json.extract! photo, :url
                end
          end
        end

        json.business do
          json.extract! review.business, :photo, :name
        end
      end
    end
  end
end