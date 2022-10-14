# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

demoUser = User.create!( email: 'demo@user.io', password: 'password', first_name: 'Demo', last_name: 'User', diet_preference: 'Vegetarian', zipcode: '10011')
