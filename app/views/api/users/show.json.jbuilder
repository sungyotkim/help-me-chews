json.user do
  json.merge! @user.attributes

  json.reviews do
    json.array! @reviews do |review|
      json.merge! review.attributes
    end
  end
end