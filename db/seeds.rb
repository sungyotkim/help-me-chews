# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#users
demo_user = User.create( email: 'demo@user.io', password: 'password', first_name: 'Demo', last_name: 'User', city: 'Bayside', state: 'NY', image_url: "https://avatars.githubusercontent.com/u/105556961?v=4")
demo_presenter = User.create( email: 'HireMe@YourCompany.pls', password: 'password', first_name: 'Tommy', last_name: 'Kim', city: 'New York', state: 'NY', image_url: "https://images.pexels.com/photos/14661/pexels-photo-14661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user1 = User.create( email: 'jeremy@user.io', password: 'password', first_name: 'Jeremy', last_name: 'Lin', city: 'San Francisco', state: 'CA', image_url: "https://images.pexels.com/photos/7823/selfie.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user2 = User.create( email: 'michael@user.io', password: 'password', first_name: 'Michael', last_name: 'Smith', city: 'New York', state: 'NY', image_url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user3 = User.create( email: 'jenny@user.io', password: 'password', first_name: 'Jenny', last_name: 'Brown', city: 'Austin', state: 'TX', image_url: "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user4 = User.create( email: 'grace@user.io', password: 'password', first_name: 'Grace', last_name: 'Miller', city: 'Los Angeles', state: 'CA', image_url: "https://images.pexels.com/photos/53000/girl-beautiful-young-face-53000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user5 = User.create( email: 'wilson@user.io', password: 'password', first_name: 'Wilson', last_name: 'Smith', city: 'Chicago', state: 'IL', image_url: "https://images.pexels.com/photos/25733/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user6 = User.create( email: 'will@user.io', password: 'password', first_name: 'Will', last_name: 'Smith', city: 'Houston', state: 'TX', image_url: "https://images.pexels.com/photos/23876/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user7 = User.create( email: 'jackyln@user.io', password: 'password', first_name: 'Jacklyn', last_name: 'Garcia', city: 'Phoenix', state: 'AZ', image_url: "https://images.pexels.com/photos/69494/pexels-photo-69494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user8 = User.create( email: 'joyce@user.io', password: 'password', first_name: 'Joyce', last_name: 'Davis', city: 'Philadelphia', state: 'PA', image_url: "https://images.pexels.com/photos/66152/pexels-photo-66152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user9 = User.create( email: 'justin@user.io', password: 'password', first_name: 'Justin', last_name: 'Smith', city: 'San Antonio', state: 'TX', image_url: "https://images.pexels.com/photos/108157/pexels-photo-108157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user10 = User.create( email: 'john@user.io', password: 'password', first_name: 'John', last_name: 'Johnson', city: 'San Diego', state: 'CA', image_url: "https://images.pexels.com/photos/59554/pexels-photo-59554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user11 = User.create( email: 'jackson@user.io', password: 'password', first_name: 'Jackson', last_name: 'Williams', city: 'New York', state: 'NY', image_url: "https://images.pexels.com/photos/41008/cowboy-ronald-reagan-cowboy-hat-hat-41008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user12 = User.create( email: 'peter@user.io', password: 'password', first_name: 'Peter', last_name: 'Smith', city: 'San Jose', state: 'CA', image_url: "https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user13 = User.create( email: 'carolyn@user.io', password: 'password', first_name: 'Carolyn', last_name: 'Jones', city: 'Bronx', state: 'NY', image_url: "https://images.pexels.com/photos/58463/pexels-photo-58463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user14 = User.create( email: 'fred@user.io', password: 'password', first_name: 'Fred', last_name: 'Taylor', city: 'Brooklyn', state: 'NY', image_url: "https://images.pexels.com/photos/105543/pexels-photo-105543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")


#businesses
levain_bakery = Business.create( yelp_id: "H4jJ7XB3CetIr1pg56CczQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/DH29qeTmPotJbCSzkjYJwg/o.jpg")
7th_street_burger = Business.create( yelp_id: "8xpGj_YkI2X6QxqXUJPw7g", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/GYqi52GZUNzGvDScteUQ8A/o.jpg")
la_contenta = Business.create( yelp_id: "6Ct7OeTRn4caY9g0swFBsw", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/FwZAyPgdKdPGQ8aAGKh3-w/o.jpg")
benemon = Business.create( yelp_id: "axqp3pGJXnTLgq2QrPyDyQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/5ZRHsFgkyoSzac8ofvhvvg/o.jpg")
da_andrea = Business.create( yelp_id: "hdiuRS9sVZSMReZm4oV5SA", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/ZbJxx7Rl8fUH7Pg4GU2p3g/o.jpg")
rosies = Business.create( yelp_id: "9aJ1MVTthZw3QjqoG7mPjg", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/C5Mf9gLWxbTiTzmOp2B2YQ/o.jpg")
hayato_new_york = Business.create( yelp_id: "vNay3HdvGsjk2q5rJA1HCg", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/WwvR-t8mStQWqxZKAVT8Eg/o.jpg")
joes_italian_deli = Business.create( yelp_id: "59hEst-eXa_psEtiZMLU6A", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/CcvhN7Hdsuj1XVrXVUFiFQ/o.jpg")
tonchin = Business.create( yelp_id: "OFfZUS-nu6NDnsWe1B2bUQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/Xu78RamVyuKvKqV8IDrvsw/o.jpg")
domodomo = Business.create( yelp_id: "BPZfuPvSxCfoppU4lPFm0Q", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/YX89PDM_-aBCL2USyNyhuw/o.jpg")
the_uncommons = Business.create( yelp_id: "h6qbszNgXgjj9Lrb62m-9w", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/23Mnb_KXYfPD2SAzEvB6YA/o.jpg")
electrician_techs = Business.create( yelp_id: "nj6qrxLemlgT4km5X80a7Q", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/e3UprXKxEE-G1onFRe-8iQ/o.jpg")
malibu_auto_repair = Business.create( yelp_id: "x9fBSRcQXrmCNYjvAitgDA", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/FhsQY8mlgSB6uKPuCCWZ2Q/o.jpg")
her_name_is_han = Business.create( yelp_id: "qY1o1MhoRyN84RRhUJtvpQ", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/SBjw3d1VlqSVEU5KMYpDdQ/o.jpg")
lappartement_4f = Business.create( yelp_id: "zMzH5TN6uieQj_mM68aUkw", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/3OKcDMAA5VsRHeJnyrKstw/o.jpg")
hakka_cuisine = Business.create( yelp_id: "OXNPuN7KcjP9T5DdilgzdQ", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/DJIlWc9RS-7OYEIs05yvBw/o.jpg")
house_of_joy = Business.create( yelp_id: "9U5tPyF6QEiVntlyTemxKA", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/B3zS6dwpVYSKPQITTvpJNQ/o.jpg")
gagopa_karaoke = Business.create( yelp_id: "D2AESr-Px4rMw7yLlCmLkQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/by0H42IKgvpbpv1j0ORVXg/o.jpg")
okiboru_house_of_tsukemen = Business.create( yelp_id: "FFzCto6PhZYZGUZLOICbTg", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/ZMLX6Znie-C78KABf0LawA/o.jpg")
app_academy_nyc = Business.create( yelp_id: "fRfkzhgwDjKU72NCxNuKmg", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/zc_-5oyQ_8J1Ym9Ei0mU4g/o.jpg")
texas_pit_stop_bbq = Business.create( yelp_id: "oFlG0LmtqujRty181Cmztw", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/x2act_IsP8-PtLA4yZQ_zA/o.jpg")
abaca = Business.create( yelp_id: "u2KkG0ucvooOdwgIgZPSlA", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/C9u-0TKuuNmL3qjz5uz3PQ/o.jpg")
kann = Business.create( yelp_id: "pHO-ZgRRZR7FM_GkEpAASA", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/gmt7ym9vSmsp-AAd-Ls2gg/o.jpg")
tito_and_pep = Business.create( yelp_id: "tkyHFPJ3dBsjE2hA_tk_sQ", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/JZdDgPdOYdPziHRY1j1yWQ/o.jpg")
locust = Business.create( yelp_id: "IWRClXjIBarIbY7WUWV-ug", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/mY2Gb4A--GAQscRNqz25MA/o.jpg")
kittys_cafe = Business.create( yelp_id: "HZ1IvAelEY5xnjBt9f5L2A", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/5kiMZpIVfiOF4kpwgPOZeg/o.jpg")
pemberton phx = Business.create( yelp_id: "FjaGfXVysSbOBnv0T41v3Q", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/vLcWNaFWKH0GhLzYtrFL6Q/o.jpg")
neptune_oyster = Business.create( yelp_id: "y2w6rFaO0XEiG5mFfOsiFA", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/ZVaN5dj-yCVIiPk7VtFhOw/o.jpg")
elvies = Business.create( yelp_id: "D-j2c3FmU639dGW-4NZIWQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/RXsWyInSnW4seHdWf91OIg/o.jpg")
brennans = Business.create( yelp_id: "ku8cAVBLaF_4rI-yK6gNnQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/c1YZ71bFC6sJdKDxzNvbGg/o.jpg")


#reviews