# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

demo_user = User.create!( email: 'demo@user.io', password: 'password', first_name: 'Tommy', last_name: 'Kim', city: 'Bayside', state: 'NY')
haidilao = Business.create!( yelp_id: 'jWuUibgnTGsJibOrr6UUSw')
haidilao_review = Review.create!( text: "This is a test review. I hope this works!", food_rating: 4, service_rating: 5, author_id: 1, business_id: 1)
test = Business.create!( yelp_id: '123')
haidilao_review2 = Review.create!( text: "This is another review", food_rating: 2, service_rating: 3, author_id: 1, business_id: 1)
