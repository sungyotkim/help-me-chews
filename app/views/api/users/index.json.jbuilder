@users.each do |user|
  json.set! user.id do 
    json.merge! user.attributes

    json.reviews do
      json.array! user.reviews do |review|
        json.merge! review.attributes

        json.business do
          json.extract! review.business, :photo, :name
        end
      end
    end
  end
end
