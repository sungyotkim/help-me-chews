json.user do
  json.extract! @user, :id, :first_name, :last_name, :email, :city, :state, :image_url, :not_yelp_user
end