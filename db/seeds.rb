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
user15 = User.create( email: 'jeremy@user.io', password: 'password', first_name: 'Jeremy', last_name: 'Lin', city: 'San Francisco', state: 'CA', image_url: "https://images.pexels.com/photos/7823/selfie.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user16 = User.create( email: 'michael@user.io', password: 'password', first_name: 'Michael', last_name: 'Smith', city: 'New York', state: 'NY', image_url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")


#businesses
levain_bakery = Business.create( yelp_id: "H4jJ7XB3CetIr1pg56CczQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/DH29qeTmPotJbCSzkjYJwg/o.jpg")
7th_street_burger = Business.create( yelp_id: "8xpGj_YkI2X6QxqXUJPw7g", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/GYqi52GZUNzGvDScteUQ8A/o.jpg")
la_contenta = Business.create( yelp_id: "6Ct7OeTRn4caY9g0swFBsw", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/FwZAyPgdKdPGQ8aAGKh3-w/o.jpg")
benemon = Business.create( yelp_id: "axqp3pGJXnTLgq2QrPyDyQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/5ZRHsFgkyoSzac8ofvhvvg/o.jpg")
da_andrea = Business.create( yelp_id: "hdiuRS9sVZSMReZm4oV5SA", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/ZbJxx7Rl8fUH7Pg4GU2p3g/o.jpg")
rosies = Business.create( yelp_id: "9aJ1MVTthZw3QjqoG7mPjg", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/C5Mf9gLWxbTiTzmOp2B2YQ/o.jpg")
xing_fu_tang = Business.create( yelp_id: "bVJQEeRNi34-3XN_F1AZEg", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/vRLClNBs5NT0aQRYyLzYGg/o.jpg")
joes_italian_deli = Business.create( yelp_id: "59hEst-eXa_psEtiZMLU6A", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/CcvhN7Hdsuj1XVrXVUFiFQ/o.jpg")
tonchin = Business.create( yelp_id: "OFfZUS-nu6NDnsWe1B2bUQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/Xu78RamVyuKvKqV8IDrvsw/o.jpg")
domodomo = Business.create( yelp_id: "BPZfuPvSxCfoppU4lPFm0Q", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/YX89PDM_-aBCL2USyNyhuw/o.jpg")
the_uncommons = Business.create( yelp_id: "h6qbszNgXgjj9Lrb62m-9w", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/23Mnb_KXYfPD2SAzEvB6YA/o.jpg")
arabica = Business.create( yelp_id: "ED7A7vDdg8yLNKJTSVHHmg", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/_3VSEFG3iUT-M66JYc7U4w/o.jpg")
sweet_moment = Business.create( yelp_id: "UZViRVpxNZvOM5KarmbT1g", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/9FgfPV5mK-FbcS6m3v-Nvg/o.jpg")
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
freya = Business.create( yelp_id: "d-5lyKTcTy10JSrBnR3q0A", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/f7paso4_IHY5oNFO-HTJ6A/o.jpg")
brennans = Business.create( yelp_id: "ku8cAVBLaF_4rI-yK6gNnQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/c1YZ71bFC6sJdKDxzNvbGg/o.jpg")


#reviews
review1 = Review.create( text: "Cookies galore! Some of the best cookies that I've had", food_rating: 5, service_rating: 5, author_id: 3, business_id: 1)
review2 = Review.create( text: "Mixed feelings with this burger! Ordered delivery and it was quite fast, the meal came hot so we were pretty excited! Had a double burger and the regular one. I would say... it tasted very good but it was by far the greasiest burger I have ver had in my life. Patty was really average, fast food patty. Size is pretty small for the price... so not sure either if I would ever order from here again... Fries ok. The cost was over $30 so again, dont think will repeat", food_rating: 3, service_rating: 5, author_id: 4, business_id: 2)
review3 = Review.create( text: "The carnitas were very tender, and while the menu warns the serrano salsa they are served with is very spicy I didn't think it was spicy at all, just flavorful.", food_rating: 4, service_rating: 5, author_id: 5, business_id: 3)
review4 = Review.create( text: "Cute spot in east village! Cute interior ambience and the wait staff are all very friendly.", food_rating: 5, service_rating: 5, author_id: 6, business_id: 4)
review5 = Review.create( text: "Been here a couple of times. Super friendly staff. Good food. Definitely recommend!", food_rating: 5, service_rating: 5, author_id: 7, business_id: 5)
review6 = Review.create( text: "Rosie's is a great restaurant. I was captivated by the ladies in the center making tortillas, and it tasted as good as I thought it would.", food_rating: 5, service_rating: 5, author_id: 8, business_id: 6)
review7 = Review.create( text: "The line forms around the block even before they open.... But it's worth the wait, usually!", food_rating: 5, service_rating: 4, author_id: 9, business_id: 7)
review8 = Review.create( text: "The bread to filling ratio seemed really off to me and with there being too much bread, it made the sandwich seem a little dry. I liked the honey mustard and the chicken cutlet was crispy and seasoned well.", food_rating: 4, service_rating: 5, author_id: 10, business_id: 8)
review9 = Review.create( text: "Wow! Blown away by everything here, it definitely deserves its Michelin star", food_rating: 5, service_rating: 5, author_id: 11, business_id: 9)
review10 = Review.create( text: "Having been here twice now, I will say come for the hand rolls. Not all hand rolls will be amazing (which is a bummer), but what they do right, they do amazingly.", food_rating: 4, service_rating: 5, author_id: 12, business_id: 10)
review11 = Review.create( text: "I LOVE this place and I honestly wish there were more like it. To my knowledge, it is the only board game bar in the city of its nature. Now there are other bars that do have board games but this particular spot is specifically catering to exclusively board games only (so no ping pong, darts, pool, none of that). It's a sit down and play kind of vibe. They do sell drinks but it's more just ciders and beers", food_rating: 2, service_rating: 5, author_id: 13, business_id: 11)
review12 = Review.create( text: "My faves are the Spanish and Kyoto lattes -- both are made with condensed milk (like a Vietnamese coffee but not as sweet), but the difference is that the Kyoto latte is made with single-origin beans whereas the Spanish uses a mixed blend. he inside is super sleek, brightly lit and minimalist. Probably not a great place to work, but it's nice to sit and chat.", food_rating: 5, service_rating: 4, author_id: 14, business_id: 12)
review13 = Review.create( text: "Been here several times now, a big factor is that it has seating. Sweet Moment is known for their coffee based drinks, & their bingsoo. It's good but it's expensive", food_rating: 4, service_rating: 5, author_id: 15, business_id: 13)
review14 = Review.create( text: "The servers were nice and efficient.  We love the presentation, the use of traditional Korean bowls and the setup of the banchan dishes.", food_rating: 5, service_rating: 5, author_id: 16, business_id: 14)
review15 = Review.create( text: "Also tried their ham & cheese croissant which was perfectly flaky and so delicious. Their tahini cookie was a chocolate cookie that's less sweet than most but still very good. We got here at 8:30 and waited about 30 minutes, and while I can't say I would love to wait this long again it was worth it!", food_rating: 5, service_rating: 5, author_id: 3, business_id: 15)
review16 = Review.create( text: "I had higher expectations for this place. Never had Hakka food before so was excited to try but food here was too bland and too small for the price. I wouldn't order here again.", food_rating: 2, service_rating: 4, author_id: 4, business_id: 16)
review17 = Review.create( text: "Food (5/5): Came with a large group of around 10 people and we enjoyed most of dim sum dishes. The shumai, dumplings, and shrimp dishes are particularly good. Service (3/5): As expected from a well known Chinatown spot with a ton of visitors, the service was not the friendliest. However, they helped when you asked and the food made up for it. Expect a long wait for larger group during weekend afternoons.", food_rating: 5, service_rating: 3, author_id: 5, business_id: 17)
review18 = Review.create( text: "One of the few noraebang/karaoke places in/around ktown that you have a shot at booking last minute. The decor and feel is very 1990s Korean noraebang. Bare bones, but has everything you need.", food_rating: 3, service_rating: 4, author_id: 6, business_id: 18)
review19 = Review.create( text: "come around an hour before they open or just give up and come back the next day, only offer ramen and tsukemen for now, no appetizers or sides, delicious food and people, broth needs to be hotter and larger portion, under $20 a meal,  limited seating options.", food_rating: 5, service_rating: 4, author_id: 7, business_id: 19)
review20 = Review.create( text: "I enjoyed the program very much. It was well paced and definitely very intensive. They don't offer food sadly", food_rating: 1, service_rating: 5, author_id: 8, business_id: 20)
review21 = Review.create( text: "The food is good but the counter service was really bad.", food_rating: 5, service_rating: 1, author_id: 9, business_id: 21)
review22 = Review.create( text: "I REALLY wanted to love Abaca, but I just didn't. We ordered a variety of dishes, but only loved 1 or 2 of them. Everything else was just meh. And for the price point, meh is just not good enough.", food_rating: 3, service_rating: 5, author_id: 10, business_id: 22)
review23 = Review.create( text: "This was an absolutely incredible experience, start to finish. It was an incredible meal. I am scheming about how to go back!", food_rating: 5, service_rating: 5, author_id: 11, business_id: 23)
review24 = Review.create( text: "Firstly, the staff and drinks were great, no complaints there.  We shared the grilled octopus which was very nice, flavorful, and cooked well. Unfortunately our mains were very disappointing; gulf stripped bass, vegetarian pozole verde, and the shrimp "Sea of Cortez" were all very bland and unmemorable. ", food_rating: 3, service_rating: 5, author_id: 12, business_id: 24)
review25 = Review.create( text: "Complimentary sea snail tea at the start of the meal--I've never had a drink with quite the same flavor and though it wasn't a hit for everyone at the table it's definitely worth trying.", food_rating: 5, service_rating: 5, author_id: 13, business_id: 25)
review26 = Review.create( text: "The pork tenderloin was right up with the best I've ever had. The homemade hot sauce was a great dressing for the sandwich. Note it's cash only", food_rating: 5, service_rating: 5, author_id: 14, business_id: 26)
review27 = Review.create( text: "This place is so gosh darn cute! There are local clothing vendors, crafts, incredible music and delicious food!!", food_rating: 5, service_rating: 5, author_id: 15, business_id: 27)
review28 = Review.create( text: "Food was amazing! Our server was very attentive despite a full restaurant - great job by all the staff there", food_rating: 5, service_rating: 5, author_id: 16, business_id: 28)
review29 = Review.create( text: "I decided to try this place after hearing about it, I'm so glad I did! The employees were so friendly and answered all my questions. You don't see Cambodian/middle eastern food often so I wasn't sure what to try. I got the spicy curry double, which was amazing. I could eat it almost any day. I'll definitely be back to try more of the menu!", food_rating: 5, service_rating: 5, author_id: 3, business_id: 29)
review30 = Review.create( text: "We got so excited for the bananas foster which was made table side. It was quite a show!", food_rating: 5, service_rating: 5, author_id: 4, business_id: 30)
review31 = Review.create( text: "The Cookie Monster in me cannot be tamed whenever I pay a visit to my favorite NY cookie shop.  As I write, I'm remembering the huge warm gooey bite of one of the best cookies known to humans. I've only been twice but it's left such an indelible mark on my life that I've attempted to bake these delectable thick cookies at home.", food_rating: 5, service_rating: 5, author_id: 5, business_id: 1)
review32 = Review.create( text: "The burgers are actually really tasty. Is it worth it for the price? That's up to you, probably not as it is a small burger. They could improve their service and friendliness though.", food_rating: 5, service_rating: 2, author_id: 6, business_id: 2)
review33 = Review.create( text: "I came here specifically for the beautiful nachos I kept seeing on Yelp and they did not disappoint! The restaurant is tiny with only a few tables and some covered outdoor seating. Service was standard.", food_rating: 5, service_rating: 4, author_id: 7, business_id: 3)
review34 = Review.create( text: "Highly recommend the una tama don if you are looking for a bowl of soul warming food! It's sweet, savory, warm, tender and just melts in your mouth! The egg, unagi, and shiitake mushroom are in perfect harmony.", food_rating: 5, service_rating: 5, author_id: 8, business_id: 4)
review35 = Review.create( text: "The food is amazing and the service is great but unfortunately the price is too high to justify the flavor", food_rating: 4, service_rating: 5, author_id: 9, business_id: 5)
review36 = Review.create( text: "The tacos in my opinion were kinda cold/warmish. It's only a two maybe three bite taco so by the time I'm into my second bite it's too late to take it back. The server was amazing though very attentive despite the activity and even offered to take a picture elf my friend and I.", food_rating: 4, service_rating: 5, author_id: 10, business_id: 6)
review37 = Review.create( text: "Only downfall is some of the drinks on the menu on the TVs aren't on the menus when you go to the register to order. You can a still order them but it would be nice to have the same menus on the TV and at the register", food_rating: 5, service_rating: 4, author_id: 11, business_id: 7)
review38 = Review.create( text: "What a place. I highly recommend when in the area. It is a little off the beaten path from Arthur Ave but definitely come by. 5 stars all the way.", food_rating: 5, service_rating: 5, author_id: 12, business_id: 8)
review39 = Review.create( text: "My go to Ramen shop now, Tonchin lives up to the hype. Super hard to get a table anywhere near prime eating times but worth the wait or off-hour time slot", food_rating: 5, service_rating: 5, author_id: 13, business_id: 9)
review40 = Review.create( text: "What an incredible place! The ambience, the food, the drinks - all so amazing! Definitely make a reservation before coming.", food_rating: 5, service_rating: 5, author_id: 14, business_id: 10)
review41 = Review.create( text: "This was my first experience at a board game cafe and it was amazing. There were so many options and the atmosphere was pleasant. The place is always booked/a bit of a wait so it's something you have to plan for. I which it was more walk in friendly for a spontaneous drop in. Needs more food options to snack on!", food_rating: 1, service_rating: 5, author_id: 15, business_id: 11)
review42 = Review.create( text: "This has to be one of my favorite cafes in dumbo! You guys must go because of the great scenery and their lemonade fizz was always super refreshing!", food_rating: 5, service_rating: 5, author_id: 16, business_id: 12)
review43 = Review.create( text: "This place was interesting, small cafe with cute designs. The drinks were okay. They had really cute latte art very instagram worthy. ", food_rating: 4, service_rating: 5, author_id: 3, business_id: 13)
review44 = Review.create( text: "Perfect quaint Korean spot to drop into for a meal. The service was great and the food excellent.", food_rating: 5, service_rating: 5, author_id: 4, business_id: 14)
review45 = Review.create( text: "The chocolate chip cookies are a must order and the raspberry almond croissant is a unique burst of flavor! The line may be long on weekends so I recommend going early if you can.", food_rating: 5, service_rating: 4, author_id: 5, business_id: 15)
review46 = Review.create( text: "Great service and opened recently. The interior is super modern, clean and minimalist. The dishes are all unique and portion size is great.", food_rating: 5, service_rating: 5, author_id: 6, business_id: 16)
review47 = Review.create( text: "This is only the house of JOY if you're Chinese. Took so long to order, missing items, had to ask for the servers many times. When we were there, it wasn't busy at all but everyone was running everywhere trying to act like they're in the rush hours", food_rating: 3, service_rating: 1, author_id: 7, business_id: 17)
review48 = Review.create( text: "So this place used to be BYOB but has now obtained a liquor license and sells soju and alcohol (and some $2 odd selection of beers). Overall, this place has a great selection of songs and you can't go wrong for $9/pp each hour karaoke.", food_rating: 3, service_rating: 5, author_id: 8, business_id: 18)
review49 = Review.create( text: "Spicy tsukemen was delicious! Definitely eat right away since the dipping broth gets cold fast while you are eating.", food_rating: 5, service_rating: 4, author_id: 9, business_id: 19)
review50 = Review.create( text: "Definitely a great learning experience but is not for everyone. Food is only a 5 because I brought my lunch daily", food_rating: 5, service_rating: 5, author_id: 10, business_id: 20)
review51 = Review.create( text: "Food is good but the portions were not. Lastly, only had interaction with the cashier. The lady working on Sunday 04-24-22 around 1:20PM, very much not happy to be here nor care to provide any time of welcoming anything. Dry, robotic, your not desired interaction all in one.", food_rating: 4, service_rating: 1, author_id: 11, business_id: 21)
review52 = Review.create( text: "If I return, I'll probably come back mostly for the drinks, and get just a few dishes. But definitely a place worth checking out. Food is a bit too salty for me. Service was great.", food_rating: 4, service_rating: 5, author_id: 12, business_id: 22)
review53 = Review.create( text: "Overall, would come again. Great dishes, service and environment. I'm excited to see the new upcoming dishes for the next season!", food_rating: 5, service_rating: 5, author_id: 13, business_id: 23)
review54 = Review.create( text: "This was not my first time at Tito & Pep, but probably my last. The first couple of times were easily 4/5 stars, with great service and excellent food. But this time, not so much.", food_rating: 2, service_rating: 5, author_id: 14, business_id: 24)
review55 = Review.create( text: "The dessert was surprise and delicious! I ordered it thinking I'd have a few bites and leave the rest but I ended up cleaning the plate.", food_rating: 5, service_rating: 5, author_id: 15, business_id: 25)
review56 = Review.create( text: "Dude!!! This place is bomb!!", food_rating: 5, service_rating: 5, author_id: 16, business_id: 26)
review57 = Review.create( text: "We had tacos. There were delicious! Highly recommend coming here if you are in the area. It's a great time.", food_rating: 5, service_rating: 4, author_id: 3, business_id: 27)
review58 = Review.create( text: "The bisque was slightly sweet with lumps of crab. Tasty and creamy. The crostini was seasoned well with some pistachios and generous helping of tuna. Staff was attentive and quickly seated people! There was still a line after we left.", food_rating: 5, service_rating: 5, author_id: 4, business_id: 28)
review59 = Review.create( text: "Every single dish is flavorful", food_rating: 5, service_rating: 5, author_id: 5, business_id: 29)
review60 = Review.create( text: "Eggs Sardou were delicious. I added the fried oysters, because in NOLA. Yum", food_rating: 5, service_rating: 5, author_id: 6, business_id: 30)
review61 = Review.create( text: "This place may be a favorite for some, but I wasn't a fan. Cookies are very heavy in chocolate, so much so that they have an almost acidic flavor. Chocolate lovers may be a fan of this ratio but I prefer a more balanced cookie. Service was okay but slightly slow", food_rating: 2, service_rating: 4, author_id: 7, business_id: 1)
review62 = Review.create( text: "7th Street is one of the best smash burgers in the city. It is a perfect pop-in place for any meal and definitely fits in the affordable category. I got a single burger topped with cheese, grilled onions, pickles, and special sauce. The single patty wouldn't have been enough but I also shared an order of the chopped beef fries. They are not on the menu but it is a must to ask. Fries topped with special sauce, grilled onions, and a burger patty. The fries were on the pricier side ($11) but the burger was $6.50, which is perfect for the serving. This was a large amount of food but fries are perfect for sharing! Highly recommended", food_rating: 5, service_rating: 5, author_id: 8, business_id: 2)
review63 = Review.create( text: "Been craving Huevos Rancheros and Clinton Street stoped making them post COVID.  Found this place on yelp, and Yelpers didn't disappoint.", food_rating: 5, service_rating: 5, author_id: 9, business_id: 3)
review64 = Review.create( text: "Had high hopes for Benemon but ultimately it was a bit of a letdown. Walked in around 6:20 on a weeknight and got a table for two immediately. The una-tama don was fantastic, but the karaage was kind of soggy - super unappealing, maybe it was laying out for a bit. Pork Katsu curry was decent, though again, the katsu itself could have been crispier.", food_rating: 3, service_rating: 5, author_id: 10, business_id: 4)
review65 = Review.create( text: "1st time at this location and not impressed. Pork Shank special was tough and Sole special was dry but we're easy so no problem until the bus guy asked if i liked the meal. I simply said it was tough. The server returns on the attack wondering why i didn't tell her? We were going to order dessert and come back another time but after the attitude why even return. I guess I'll just head up to La Masseria when I want italian. I rarely write a review but this time I had no choice.", food_rating: 2, service_rating: 1, author_id: 11, business_id: 5)
review66 = Review.create( text: "I have never had a bad meal at Rosie's, but this last time there outdid itself. Our waitress was also amazing!", food_rating: 5, service_rating: 5, author_id: 12, business_id: 6)
review67 = Review.create( text: "I ordered the brown sugar boba milk and it was delicious. The torched sugar on top added such a great flavor and overall it was a very well-balanced drink. Drinks came out super fast and it was a great treat after dinner. I'd definitely come again!", food_rating: 5, service_rating: 5, author_id: 13, business_id: 7)
review68 = Review.create( text: "Love Joe's. One of the best deli's in Belmont, Bronx near Arthur Ave. I've gotten the last meal, the goodfella sandwich, DSNY the strongest all delicious. ", food_rating: 5, service_rating: 5, author_id: 14, business_id: 8)
review69 = Review.create( text: "The food was pretty good, but I'm not crazy about it. It's a Michelin star restaurant, but I guess my expectations were too high. The noodles were flavorful and the soup was tasty and seasoned well, but it just personally did not stand out to me, is something I'm fine with not having again. Service was superb, however.", food_rating: 3, service_rating: 5, author_id: 15, business_id: 9)
review70 = Review.create( text: "The domokase course was definitely unique. I really enjoyed trying a wide variety of dishes and types of seafood. Their fish is good and fresh, not the most mindblowingly quality, but they do have unique and interesting flavor combinations that I have not seen before. Additionally, their service is was wonderful. I really enjoyed experience. I would come back and suggest it to my friends!", food_rating: 5, service_rating: 5, author_id: 16, business_id: 10)
review71 = Review.create( text: "The service was top notch everyone was super friendly and tried to help as much as they can. The coffee is not my favorite drink so next time I will prob try something else.", food_rating: 2, service_rating: 5, author_id: 3, business_id: 11)
review72 = Review.create( text: "Modern decor, efficient service, nice and quiet atmosphere. Prices were reasonable, food and drinks were standard.", food_rating: 3, service_rating: 5, author_id: 4, business_id: 12)
review73 = Review.create( text: "Came in for shaved ice and the flavors were good. Not a ton of variety - basically you pick between a mixture of chocolate, matcha, strawberry. Wish there was more fun stuff! Flavor was okay.", food_rating: 3, service_rating: 5, author_id: 5, business_id: 13)
review74 = Review.create( text: "Her Name is Han, located on busy 31st Street in the heart of Koreatown, offers an amazing and diverse lunch set menu for less than $20 on weekdays from noon-2:30pm. There is usually quite a long line here for walk-in so come right at opening time!", food_rating: 5, service_rating: 5, author_id: 6, business_id: 14)
review75 = Review.create( text: "I came to see what the hype was about and I must say it was just okay. ", food_rating: 3, service_rating: 3, author_id: 7, business_id: 15)
review76 = Review.create( text: "Food is great, staff were friendly and attentive. Nice environment with modern interior. Definitely worth coming back!", food_rating: 5, service_rating: 5, author_id: 8, business_id: 16)
review77 = Review.create( text: "Best dim sum in NYC!", food_rating: 5, service_rating: 5, author_id: 9, business_id: 17)
review78 = Review.create( text: "I am 99% sure they overcharged us, but y'know what? I had a good time anyway and that's what matters! Our group was fairly big, but they accommodated us fairly quickly.", food_rating: 4, service_rating: 5, author_id: 10, business_id: 18)
review79 = Review.create( text: "I'll probably be back, but definitely won't wait an hour for this place again. Wait until the hype dies down and try it!", food_rating: 5, service_rating: 4, author_id: 11, business_id: 19)
review80 = Review.create( text: "I had no coding background but I definitely learned a lot and was able to keep up, though it was only after putting lots of hours and hard work. Please add another microwave and fridge, when there's two cohorts there's not much space and the lines get long!", food_rating: 1, service_rating: 5, author_id: 12, business_id: 20)
review81 = Review.create( text: "Good bbq and great prices. But the real star is the chicken fried steak and the catfish. So much better if you eat in. Love this place.", food_rating: 5, service_rating: 5, author_id: 13, business_id: 21)
review82 = Review.create( text: "This restaurant is not your typical Filipino restaurant. Each dish is unique and non-traditional. Make sure you make room for their dessert. Their cocktails were also good. I recommend the Ube-Colada.", food_rating: 5, service_rating: 5, author_id: 14, business_id: 22)
review83 = Review.create( text: "Service was great here! They made sure to explain every dish and refilled water glasses. The team members knew the menu well. Some dishes were superb and some were just ehhh.", food_rating: 4, service_rating: 5, author_id: 15, business_id: 23)
review84 = Review.create( text: "One of the best restaurants in Tucson, we visit every trip to town.", food_rating: 5, service_rating: 5, author_id: 16, business_id: 24)
review85 = Review.create( text: "Wow where to start... this place was INCREDIBLE. Really fun, young, energizing vibe/ambiance. The chefs take turns dropping off dishes. All of the chefs were really cool and took time answering our questions.", food_rating: 5, service_rating: 5, author_id: 3, business_id: 25)
review86 = Review.create( text: "Sorry Tenderloin Grill, Christine's Fire House, Harold's, Christy's... it looks like you are staying in Triple A as long as Kitty's is in town.", food_rating: 5, service_rating: 5, author_id: 4, business_id: 26)
review87 = Review.create( text: "It is dog friendly! Major plus. By the way, it's MUCH nicer at night! The neon lights and garden lights make for a lovely atmosphere.", food_rating: 5, service_rating: 5, author_id: 5, business_id: 27)
review88 = Review.create( text: "The island creek ones were my favorite from Duxbury. Just a right mix and so smooth the taste. Just heaven. Service was quick and professional. We are quickly as the line was 20 deep when we left. But so enjoyable. Go go go.", food_rating: 5, service_rating: 5, author_id: 6, business_id: 28)
review89 = Review.create( text: "Food was really good but the service wasn't. Waited way too long to be served. I won't be back.", food_rating: 5, service_rating: 1, author_id: 7, business_id: 29)
review90 = Review.create( text: "I feel like I'm in an episode of Golden Girls when i dined here. The bananas fosters was ok. The wait staff is top notch. The cocktails are strong.", food_rating: 4, service_rating: 5, author_id: 8, business_id: 30)