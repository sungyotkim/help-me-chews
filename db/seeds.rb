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
levain_bakery = Business.create( name: "Levain Bakery", yelp_id: "H4jJ7XB3CetIr1pg56CczQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/DH29qeTmPotJbCSzkjYJwg/o.jpg", yelp_info: {
  id: "H4jJ7XB3CetIr1pg56CczQ",
  alias: "levain-bakery-new-york",
  name: "Levain Bakery",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/DH29qeTmPotJbCSzkjYJwg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/levain-bakery-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+19174643769",
  display_phone: "(917) 464-3769",
  review_count: 9221,
  categories: [
    {
      alias: "bakeries",
      title: "Bakeries",
    },
  ],
  rating: 4.5,
  location: {
    address1: "167 W 74th St",
    address2: "",
    address3: "",
    city: "New York",
    zip_code: "10023",
    country: "US",
    state: "NY",
    display_address: ["167 W 74th St", "New York, NY 10023"],
    cross_streets: "Columbus Ave & Amsterdam Ave",
  },
  coordinates: {
    latitude: 40.779961,
    longitude: -73.980299,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/DH29qeTmPotJbCSzkjYJwg/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/hCp7TJqo1m_rGPkvso4dxw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/AKrJnuB0lsL9CgAIMmweuQ/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 4,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 5,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: [],
  messaging: {
    url: "https://www.yelp.com/raq/H4jJ7XB3CetIr1pg56CczQ?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg#popup%3Araq",
    use_case_text: "Message the Business",
  },
  yelp_reviews: [
    {
      id: "2kxtzfc-B07UpM0AYsMCpw",
      url: "https://www.yelp.com/biz/levain-bakery-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=2kxtzfc-B07UpM0AYsMCpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Amazing! Cookies are all tasty and the coffee did match their flavors. I highly recommend this store also because the staffs are so nice.",
      rating: 5,
      time_created: "2022-09-23 02:52:27",
      user: {
        id: "VJi43Al4IXVhv8943wpgPg",
        profile_url:
          "https://www.yelp.com/user_details?userid=VJi43Al4IXVhv8943wpgPg",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Yuiko U.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "dLBGb28cq90M2a_v2sBxfQ",
      url: "https://www.yelp.com/biz/levain-bakery-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=dLBGb28cq90M2a_v2sBxfQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Best cookies in NYC. The rocky road cookies were so amazing. It is seasonal so hopefully it is there when you go.",
      rating: 5,
      time_created: "2022-09-17 07:10:58",
      user: {
        id: "IQBRPV-_1r3zDoNhpOF4aA",
        profile_url:
          "https://www.yelp.com/user_details?userid=IQBRPV-_1r3zDoNhpOF4aA",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Edesiri I.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "rWH5BhDuL3X1xpr9R96ubg",
      url: "https://www.yelp.com/biz/levain-bakery-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=rWH5BhDuL3X1xpr9R96ubg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "I love me some levain bakery   their cookies are just so pillowy soft. There is the perfect amount of chew with the perfect amount of soft. Some cookies are...",
      rating: 5,
      time_created: "2022-10-19 07:23:21",
      user: {
        id: "Wxq0N3HQpzLDp1KsZXcTYw",
        profile_url:
          "https://www.yelp.com/user_details?userid=Wxq0N3HQpzLDp1KsZXcTYw",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/RmY-Y1LctOBGCWutn5CQEA/o.jpg",
        name: "Anglin T.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
street_burger = Business.create( name: "7th Street Burger", yelp_id: "8xpGj_YkI2X6QxqXUJPw7g", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/GYqi52GZUNzGvDScteUQ8A/o.jpg", yelp_info: {
  id: "8xpGj_YkI2X6QxqXUJPw7g",
  alias: "7th-street-burger-new-york",
  name: "7th Street Burger",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/GYqi52GZUNzGvDScteUQ8A/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/7th-street-burger-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+16464906797",
  display_phone: "(646) 490-6797",
  review_count: 199,
  categories: [
    {
      alias: "burgers",
      title: "Burgers",
    },
  ],
  rating: 4.5,
  location: {
    address1: "91 E 7th St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10009",
    country: "US",
    state: "NY",
    display_address: ["91 E 7th St", "New York, NY 10009"],
    cross_streets: "Avenue A & 1st Ave",
  },
  coordinates: {
    latitude: 40.72697,
    longitude: -73.98546,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/GYqi52GZUNzGvDScteUQ8A/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/0Qv6A55loWrYKtBLxqJeSw/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/aa1mVIDuFbpGmalmtzaZdA/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1600",
          end: "2300",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1600",
          end: "2300",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1600",
          end: "2300",
          day: 2,
        },
        {
          is_overnight: true,
          start: "1600",
          end: "0200",
          day: 3,
        },
        {
          is_overnight: true,
          start: "1600",
          end: "0300",
          day: 4,
        },
        {
          is_overnight: true,
          start: "1200",
          end: "0300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["pickup", "delivery"],
  yelp_reviews: [
    {
      id: "I-8L6ssMTgcGya1JI19HYw",
      url: "https://www.yelp.com/biz/7th-street-burger-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=I-8L6ssMTgcGya1JI19HYw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "went here on a friday night and it was packed outside, got my burger and fries and was kind of shocked. you know those moments where they say there is...",
      rating: 5,
      time_created: "2022-10-08 18:25:53",
      user: {
        id: "S3KloAGXOPS9ENlwERdmAQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=S3KloAGXOPS9ENlwERdmAQ",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/_TV57NbseyEN0-Zs9BVYuQ/o.jpg",
        name: "Matt A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "E8jtldiiUVbkB5kc8FcY8Q",
      url: "https://www.yelp.com/biz/7th-street-burger-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=E8jtldiiUVbkB5kc8FcY8Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "I can assure you that these 5-star reviews were done by people in their peak drunk state. While I'm at that, you should definitely reconsider trusting...",
      rating: 3,
      time_created: "2022-10-16 14:42:29",
      user: {
        id: "cGQl6-ax-DwpcRWiHQuqCQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=cGQl6-ax-DwpcRWiHQuqCQ",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/icBtSgS32ikkqeEhlwZZyg/o.jpg",
        name: "Ryan K.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "6s6C_-dcynTqbA-XYxNorg",
      url: "https://www.yelp.com/biz/7th-street-burger-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=6s6C_-dcynTqbA-XYxNorg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Cheeseburger  \nexcellent meat quality, super juicy, great tasting sauce, grilled onions, can taste the quality \nwait is pretty long but worth it\nthere is a...",
      rating: 5,
      time_created: "2022-10-01 17:44:37",
      user: {
        id: "Dr66Yy7PyAeraWsSE9zZnA",
        profile_url:
          "https://www.yelp.com/user_details?userid=Dr66Yy7PyAeraWsSE9zZnA",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/Dpzi3lEJImfLtWi89t1eww/o.jpg",
        name: "Angrysushi S.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
la_contenta = Business.create( name: "La Contenta", yelp_id: "6Ct7OeTRn4caY9g0swFBsw", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/FwZAyPgdKdPGQ8aAGKh3-w/o.jpg", yelp_info: {
  id: "6Ct7OeTRn4caY9g0swFBsw",
  alias: "la-contenta-new-york",
  name: "La Contenta",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/FwZAyPgdKdPGQ8aAGKh3-w/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/la-contenta-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12124324180",
  display_phone: "(212) 432-4180",
  review_count: 862,
  categories: [
    {
      alias: "mexican",
      title: "Mexican",
    },
    {
      alias: "bars",
      title: "Bars",
    },
    {
      alias: "breakfast_brunch",
      title: "Breakfast & Brunch",
    },
  ],
  rating: 4.5,
  location: {
    address1: "102 Norfolk St",
    address2: "",
    address3: "",
    city: "New York",
    zip_code: "10002",
    country: "US",
    state: "NY",
    display_address: ["102 Norfolk St", "New York, NY 10002"],
    cross_streets: "Rivington St & Delancey St",
  },
  coordinates: {
    latitude: 40.71873,
    longitude: -73.98691,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/FwZAyPgdKdPGQ8aAGKh3-w/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/BkFe_N0Ri2FXiCzoponVWw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/c4GEeNy7AzjXpgdqtthTPQ/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1500",
          end: "2200",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1500",
          end: "2200",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1500",
          end: "2200",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "2200",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["delivery", "pickup"],
  messaging: {
    url: "https://www.yelp.com/raq/6Ct7OeTRn4caY9g0swFBsw?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg#popup%3Araq",
    use_case_text: "Message the Business",
  },
  yelp_reviews: [
    {
      id: "zNHdtf-SC__XflUJ4eUa0g",
      url: "https://www.yelp.com/biz/la-contenta-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=zNHdtf-SC__XflUJ4eUa0g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "The drinks were great and we were recommended the chicken enchiladas and wow they were astonishing. \n\nI can't get over how delicious they were!!! The chips...",
      rating: 5,
      time_created: "2022-09-08 06:15:24",
      user: {
        id: "r7VNwxCMEtMW6crC4STU1A",
        profile_url:
          "https://www.yelp.com/user_details?userid=r7VNwxCMEtMW6crC4STU1A",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/RBxXapAhydIzkWCOrPvpgQ/o.jpg",
        name: "Bernard L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "qUNf2oNV7vVbixPp_YABBw",
      url: "https://www.yelp.com/biz/la-contenta-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=qUNf2oNV7vVbixPp_YABBw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Almost a 5, except they messed up our Fri night reservation a bit and we had to wait 30-45 minutes after our scheduled reservation time for a table :(\n\nOnce...",
      rating: 4,
      time_created: "2022-10-13 18:48:49",
      user: {
        id: "fltJI6q94pwMRRWN5gPMhw",
        profile_url:
          "https://www.yelp.com/user_details?userid=fltJI6q94pwMRRWN5gPMhw",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/7tl7H-_wlV8dO4bzLJ1Nhw/o.jpg",
        name: "Claire H.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "kqAdARnqc5Nkwop199NPgA",
      url: "https://www.yelp.com/biz/la-contenta-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=kqAdARnqc5Nkwop199NPgA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This is a cute little restaurant in the LES. If you are like me, you will walk in and notice the flowers that hang from the ceiling, the wall art and how a...",
      rating: 4,
      time_created: "2022-07-20 21:24:33",
      user: {
        id: "goA7WzEyFkekGoO7SrkGiQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=goA7WzEyFkekGoO7SrkGiQ",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/ouNvoLmczRt7lyqQLiPANg/o.jpg",
        name: "Palvi P.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
benemon = Business.create( name: "Benemon", yelp_id: "axqp3pGJXnTLgq2QrPyDyQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/5ZRHsFgkyoSzac8ofvhvvg/o.jpg", yelp_info: {
  id: "axqp3pGJXnTLgq2QrPyDyQ",
  alias: "benemon-new-york",
  name: "Benemon",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/5ZRHsFgkyoSzac8ofvhvvg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/benemon-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12126143006",
  display_phone: "(212) 614-3006",
  review_count: 675,
  categories: [
    {
      alias: "japanese",
      title: "Japanese",
    },
    {
      alias: "tapasmallplates",
      title: "Tapas/Small Plates",
    },
    {
      alias: "cocktailbars",
      title: "Cocktail Bars",
    },
  ],
  rating: 4.5,
  location: {
    address1: "108 E 4th St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10003",
    country: "US",
    state: "NY",
    display_address: ["108 E 4th St", "New York, NY 10003"],
    cross_streets: "1st Ave & 12th St",
  },
  coordinates: {
    latitude: 40.72551,
    longitude: -73.98838,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/5ZRHsFgkyoSzac8ofvhvvg/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/VOJ1AdcBdml8gNlmb5Ey1Q/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/4_uM_V3OciNNmg04oyEDIQ/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["pickup", "delivery"],
  yelp_reviews: [
    {
      id: "PLAEhkRwdHaFj6hn-O3fFw",
      url: "https://www.yelp.com/biz/raku-new-york-7?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=PLAEhkRwdHaFj6hn-O3fFw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Snagged a table here the first night I arrived in nyc. It would be nice if I was able to join the waitlist through Yelp but for some reason it was not...",
      rating: 5,
      time_created: "2022-10-10 09:38:13",
      user: {
        id: "AxWvQw9xwuUITauuP3UaqQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=AxWvQw9xwuUITauuP3UaqQ",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/H0L2G8BhVHofL_Qes7HGBg/o.jpg",
        name: "Judy C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "O5qKFVNF6Yeg2kmyf9YVZQ",
      url: "https://www.yelp.com/biz/raku-new-york-7?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=O5qKFVNF6Yeg2kmyf9YVZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "The server was not that friendly. I was trying out the cuisine for the first time and was not sure how to have it. The host was rude about not knowing how...",
      rating: 3,
      time_created: "2022-10-18 18:34:37",
      user: {
        id: "M6n_ktG1-b8PwvC5kZ_zXg",
        profile_url:
          "https://www.yelp.com/user_details?userid=M6n_ktG1-b8PwvC5kZ_zXg",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/tTtv7vFIJFkle0atfcRJUQ/o.jpg",
        name: "Tanvi V.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "hkJazIJ_WoUhkkXZ7eqgQQ",
      url: "https://www.yelp.com/biz/raku-new-york-7?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=hkJazIJ_WoUhkkXZ7eqgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "A few of my friends really hyped up Raku, so I was super excited to finally visit. \n\nThis location is smaller than the Soho location and doesn't take...",
      rating: 4,
      time_created: "2022-10-15 19:44:42",
      user: {
        id: "hzRsvggtqhN6VfGcxfq8Bw",
        profile_url:
          "https://www.yelp.com/user_details?userid=hzRsvggtqhN6VfGcxfq8Bw",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/LnM7TC6AYH_BT2fXLyhhpA/o.jpg",
        name: "Molly Z.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
da_andrea = Business.create( name: "Da Andrea", yelp_id: "hdiuRS9sVZSMReZm4oV5SA", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/ZbJxx7Rl8fUH7Pg4GU2p3g/o.jpg", yelp_info: {
  id: "hdiuRS9sVZSMReZm4oV5SA",
  alias: "da-andrea-new-york",
  name: "Da Andrea",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/ZbJxx7Rl8fUH7Pg4GU2p3g/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/da-andrea-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12123671979",
  display_phone: "(212) 367-1979",
  review_count: 1596,
  categories: [
    {
      alias: "italian",
      title: "Italian",
    },
    {
      alias: "mediterranean",
      title: "Mediterranean",
    },
    {
      alias: "breakfast_brunch",
      title: "Breakfast & Brunch",
    },
  ],
  rating: 4.5,
  location: {
    address1: "35 W 13th St",
    address2: "",
    address3: "",
    city: "New York",
    zip_code: "10011",
    country: "US",
    state: "NY",
    display_address: ["35 W 13th St", "New York, NY 10011"],
    cross_streets: "Avenue Of The Americas & 5th Ave",
  },
  coordinates: {
    latitude: 40.736218,
    longitude: -73.99597,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/ZbJxx7Rl8fUH7Pg4GU2p3g/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/LWYP6nsJG5L9a8cKcxdYQg/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/aQ4iTzNALuB0csHCF5nCAw/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1130",
          end: "2200",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "2200",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "2200",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "2200",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["pickup", "delivery", "restaurant_reservation"],
  yelp_reviews: [
    {
      id: "PUaGCGzJy1DjH6XfxGosSg",
      url: "https://www.yelp.com/biz/da-andrea-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=PUaGCGzJy1DjH6XfxGosSg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Great place, great atmosphere inside seating or out. A lot of flowers outside. The food is perfect! Authentically Italian BEST PANNA COTTA EVER! our server...",
      rating: 5,
      time_created: "2022-09-13 13:09:31",
      user: {
        id: "9YRgn1XpjNj4EDDx-m5_0g",
        profile_url:
          "https://www.yelp.com/user_details?userid=9YRgn1XpjNj4EDDx-m5_0g",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/0rJVQXJArOxCubagAzH-tg/o.jpg",
        name: "Paris A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "fs6jRFOEkl6yybjDi7RbYA",
      url: "https://www.yelp.com/biz/da-andrea-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=fs6jRFOEkl6yybjDi7RbYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Da Andrea is a cosy restaurant with great atmosphere and ambience. We sat at a table outside which was pretty nice and airy. The brunch menu has many...",
      rating: 5,
      time_created: "2022-09-03 12:27:00",
      user: {
        id: "NDb6JECfkqPMLOvkZ3Rh1g",
        profile_url:
          "https://www.yelp.com/user_details?userid=NDb6JECfkqPMLOvkZ3Rh1g",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/1cB4FCNIVsE4L6zUE4JA7Q/o.jpg",
        name: "Mai N.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "xYxDx8YQt_q5CDkV1n3WMQ",
      url: "https://www.yelp.com/biz/da-andrea-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=xYxDx8YQt_q5CDkV1n3WMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Very kind and accommodating service, especially James who checked up on us and answered our questions. Entrees and dessert were also very delicious",
      rating: 5,
      time_created: "2022-09-18 17:49:17",
      user: {
        id: "0cxLbEkxkEwA50M5bzj5WA",
        profile_url:
          "https://www.yelp.com/user_details?userid=0cxLbEkxkEwA50M5bzj5WA",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Vivien G.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
rosies = Business.create( name: "Rosie's", yelp_id: "9aJ1MVTthZw3QjqoG7mPjg", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/C5Mf9gLWxbTiTzmOp2B2YQ/o.jpg", yelp_info: {
  id: "9aJ1MVTthZw3QjqoG7mPjg",
  alias: "rosies-new-york-2",
  name: "Rosie's",
  image_url:
    "https://s3-media1.fl.yelpcdn.com/bphoto/C5Mf9gLWxbTiTzmOp2B2YQ/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/rosies-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12123350114",
  display_phone: "(212) 335-0114",
  review_count: 855,
  categories: [
    {
      alias: "mexican",
      title: "Mexican",
    },
  ],
  rating: 4,
  location: {
    address1: "29 E 2nd St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10003",
    country: "US",
    state: "NY",
    display_address: ["29 E 2nd St", "New York, NY 10003"],
    cross_streets: "1st St",
  },
  coordinates: {
    latitude: 40.72492,
    longitude: -73.99079,
  },
  photos: [
    "https://s3-media1.fl.yelpcdn.com/bphoto/C5Mf9gLWxbTiTzmOp2B2YQ/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/TywY-P1Fu05UD85uEBFLyw/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/3UWuqAEOoo2Agl7gpH87Xg/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1700",
          end: "2200",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1600",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["pickup", "delivery"],
  yelp_reviews: [
    {
      id: "bpKYSLqzq0vZfM34LaoMqQ",
      url: "https://www.yelp.com/biz/rosies-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=bpKYSLqzq0vZfM34LaoMqQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Rosie's is a great restaurant. I was captivated by the ladies in the center making tortillas, and it tasted as good as I thought it would.\n\nThe food was...",
      rating: 5,
      time_created: "2022-09-23 19:53:04",
      user: {
        id: "GwG-9_xz-G-gz7RzV4Wu2Q",
        profile_url:
          "https://www.yelp.com/user_details?userid=GwG-9_xz-G-gz7RzV4Wu2Q",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/u9VPxCvWl4tnX5nxV40Rjw/o.jpg",
        name: "Nory A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "bGvZZtVY8zcGwjxmzI59ng",
      url: "https://www.yelp.com/biz/rosies-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=bGvZZtVY8zcGwjxmzI59ng&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "I got the DIY taco platter with two meats: Barbacoa and Al Pastor. This was a great value! I shared it with two others and we were stuffed.\n\nThe Barbacoa...",
      rating: 4,
      time_created: "2022-06-27 11:55:56",
      user: {
        id: "7ngFvy8_44rkVA2jd01mRg",
        profile_url:
          "https://www.yelp.com/user_details?userid=7ngFvy8_44rkVA2jd01mRg",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/0bkaKs4G8ZCgIrrsiD3cJQ/o.jpg",
        name: "Olivia P.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "_qewuiTGfOiHgTpf1ckQ0g",
      url: "https://www.yelp.com/biz/rosies-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=_qewuiTGfOiHgTpf1ckQ0g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "LISTEN! \n\nThe vibe was perfect! Honeyyyyy the guacamole was outstanding! I have not had anything better anywhere else! \n\nThe tacos were flavorful as well...",
      rating: 5,
      time_created: "2022-06-08 12:09:28",
      user: {
        id: "Bd0fesy95927UyoWy_Qp-w",
        profile_url:
          "https://www.yelp.com/user_details?userid=Bd0fesy95927UyoWy_Qp-w",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/JR3CUqEWUx-G6pVB3SeRcg/o.jpg",
        name: "Jay W.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
xing_fu_tang = Business.create( name: "Xing Fu Tang", yelp_id: "bVJQEeRNi34-3XN_F1AZEg", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/vRLClNBs5NT0aQRYyLzYGg/o.jpg", yelp_info: {
  id: "bVJQEeRNi34-3XN_F1AZEg",
  alias: "xing-fu-tang-new-york",
  name: "Xing Fu Tang",
  image_url:
    "https://s3-media1.fl.yelpcdn.com/bphoto/vRLClNBs5NT0aQRYyLzYGg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/xing-fu-tang-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "",
  display_phone: "",
  review_count: 189,
  categories: [
    {
      alias: "bubbletea",
      title: "Bubble Tea",
    },
  ],
  rating: 4.5,
  location: {
    address1: "133 2nd Ave",
    address2: "",
    address3: null,
    city: "New York",
    zip_code: "10003",
    country: "US",
    state: "NY",
    display_address: ["133 2nd Ave", "New York, NY 10003"],
    cross_streets: "St Marks Pl & 9th St",
  },
  coordinates: {
    latitude: 40.7288,
    longitude: -73.98775,
  },
  photos: [
    "https://s3-media1.fl.yelpcdn.com/bphoto/vRLClNBs5NT0aQRYyLzYGg/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/3MmhcUZNB1QVuR944Db-ig/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/7p_RJ7Qk1F3s7c0i0UOT1Q/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1400",
          end: "2200",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1400",
          end: "2200",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1400",
          end: "2200",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1400",
          end: "2200",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1400",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1300",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1300",
          end: "2300",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["delivery", "pickup"],
  messaging: {
    url: "https://www.yelp.com/raq/bVJQEeRNi34-3XN_F1AZEg?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg#popup%3Araq",
    use_case_text: "Message the Business",
  },
  yelp_reviews: [
    {
      id: "ZBlKd7sQHu0vu0kmUNf5cQ",
      url: "https://www.yelp.com/biz/xing-fu-tang-flushing?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ZBlKd7sQHu0vu0kmUNf5cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Best bubble tea in NYC hands down. I thought it would be too sweet judging by looks of the thick brown syrup but it was perfect. The boba is freshly made....",
      rating: 5,
      time_created: "2022-09-06 19:05:56",
      user: {
        id: "d78Z0B6VMkvRYQk219n6WA",
        profile_url:
          "https://www.yelp.com/user_details?userid=d78Z0B6VMkvRYQk219n6WA",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/FYnKr_M3Nss6oTJmoYC5FA/o.jpg",
        name: "Azarel B.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "AZve58EpbFJ4-s1UF02B9Q",
      url: "https://www.yelp.com/biz/xing-fu-tang-flushing?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=AZve58EpbFJ4-s1UF02B9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Ordered their signature brown sugar boba milk tea. Sugar can't be adjusted and there's an additional price if adjusting ice since less ice is equivalent to...",
      rating: 4,
      time_created: "2022-09-29 06:00:33",
      user: {
        id: "g0P5WJR873M3I1IM2qL8dQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=g0P5WJR873M3I1IM2qL8dQ",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/3uGfGTXl7RquG3iIJVxW6Q/o.jpg",
        name: "Feefee S.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "_2up-cfcVQauWSnmOxQrtA",
      url: "https://www.yelp.com/biz/xing-fu-tang-flushing?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=_2up-cfcVQauWSnmOxQrtA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "You ready to wait 30 minutes for some hand made boba? We'll get ready if you're wanting to try this place. Especially if you're looking at coming on a...",
      rating: 5,
      time_created: "2022-08-26 16:10:23",
      user: {
        id: "1co-llB7W6ydEObKuoyH5A",
        profile_url:
          "https://www.yelp.com/user_details?userid=1co-llB7W6ydEObKuoyH5A",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/zfPW4gQwc1WXlBnjZjNcdw/o.jpg",
        name: "Evelina C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
joes_italian_deli = Business.create( name: "Joe's Italian Deli", yelp_id: "59hEst-eXa_psEtiZMLU6A", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/CcvhN7Hdsuj1XVrXVUFiFQ/o.jpg", yelp_info: {
  id: "59hEst-eXa_psEtiZMLU6A",
  alias: "joes-italian-deli-bronx-3",
  name: "Joe's Italian Deli",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/CcvhN7Hdsuj1XVrXVUFiFQ/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/joes-italian-deli-bronx-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+17183677979",
  display_phone: "(718) 367-7979",
  review_count: 163,
  categories: [
    {
      alias: "delis",
      title: "Delis",
    },
    {
      alias: "cheese",
      title: "Cheese Shops",
    },
  ],
  rating: 5,
  location: {
    address1: "685 E 187th St",
    address2: null,
    address3: "",
    city: "Bronx",
    zip_code: "10458",
    country: "US",
    state: "NY",
    display_address: ["685 E 187th St", "Bronx, NY 10458"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 40.8544073,
    longitude: -73.8848751,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/CcvhN7Hdsuj1XVrXVUFiFQ/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/JIsVmXXq_Y2qtJCBuhdjew/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/cd9u9nvuZdqCWApatyPxOA/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0830",
          end: "1730",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0830",
          end: "1730",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0830",
          end: "1730",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0830",
          end: "1730",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0830",
          end: "1730",
          day: 4,
        },
        {
          is_overnight: false,
          start: "0830",
          end: "1730",
          day: 5,
        },
        {
          is_overnight: false,
          start: "0830",
          end: "1530",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["pickup", "delivery"],
  yelp_reviews: [
    {
      id: "1e0QOnLPZxH8y0dOy_qLsw",
      url: "https://www.yelp.com/biz/joes-italian-deli-bronx-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=1e0QOnLPZxH8y0dOy_qLsw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "A first class establishment!! I took advantage of the free shipping by ordering over $100.00. The Felino Salami, Incanestrato, Artigano, and Scarmoza cheese...",
      rating: 5,
      time_created: "2022-05-20 07:45:45",
      user: {
        id: "lwiNkzbYy3hIFY0TTKKqFg",
        profile_url:
          "https://www.yelp.com/user_details?userid=lwiNkzbYy3hIFY0TTKKqFg",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/QYAKBNwQl9djyEgyxYh6qQ/o.jpg",
        name: "Andrea J.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "gic4DqJVUygqLqLADtw9xg",
      url: "https://www.yelp.com/biz/joes-italian-deli-bronx-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=gic4DqJVUygqLqLADtw9xg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "The Captain sandwich consists of rotten tomatoes, sour Ham and rotten lettuce. The hogtie was stale!!\nI went for my Birthday because I thought I was getting...",
      rating: 1,
      time_created: "2022-09-06 07:16:58",
      user: {
        id: "HsvGV8sxn-shjQHOZkGHDw",
        profile_url:
          "https://www.yelp.com/user_details?userid=HsvGV8sxn-shjQHOZkGHDw",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/mDwlOSoygDyYFkPH07aKmw/o.jpg",
        name: "Rosanna V.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 1,
      serviceRating: 1,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "7TSrvv7J4P8BzZ-_DXb_Nw",
      url: "https://www.yelp.com/biz/joes-italian-deli-bronx-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=7TSrvv7J4P8BzZ-_DXb_Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "One word: mozzarella. Ok two words: *fresh* mozzarella. This place is an immersive experience. The people behind the counter are bantering enthusiastically...",
      rating: 5,
      time_created: "2021-11-20 20:33:00",
      user: {
        id: "geKimmY-EivI7AUMJr5ARw",
        profile_url:
          "https://www.yelp.com/user_details?userid=geKimmY-EivI7AUMJr5ARw",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/COyCZoCMnJW3GbWyulmf4g/o.jpg",
        name: "Leemor Y.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
tonchin = Business.create( name: "Tonchin", yelp_id: "OFfZUS-nu6NDnsWe1B2bUQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/Xu78RamVyuKvKqV8IDrvsw/o.jpg", yelp_info: {
  id: "OFfZUS-nu6NDnsWe1B2bUQ",
  alias: "tonchin-new-york-2",
  name: "Tonchin",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/Xu78RamVyuKvKqV8IDrvsw/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/tonchin-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+16466929912",
  display_phone: "(646) 692-9912",
  review_count: 1694,
  categories: [
    {
      alias: "ramen",
      title: "Ramen",
    },
    {
      alias: "izakaya",
      title: "Izakaya",
    },
    {
      alias: "wine_bars",
      title: "Wine Bars",
    },
  ],
  rating: 4.5,
  location: {
    address1: "13 W 36th St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10018",
    country: "US",
    state: "NY",
    display_address: ["13 W 36th St", "New York, NY 10018"],
    cross_streets: "Avenue Of The Americas & 5th Ave",
  },
  coordinates: {
    latitude: 40.7502727,
    longitude: -73.9844951,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/Xu78RamVyuKvKqV8IDrvsw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/KeaNq_WpkF7My-GLKH-pvA/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/8gA05pfIA0VNAa_L1IN8uA/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1130",
          end: "1415",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1730",
          end: "2130",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "1415",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1730",
          end: "2130",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "1415",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1730",
          end: "2130",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "1415",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1730",
          end: "2130",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1130",
          end: "1415",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1730",
          end: "2130",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "2130",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "2100",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["pickup", "delivery"],
  yelp_reviews: [
    {
      id: "_cMVPfyUD9o2kOB2TnfEIA",
      url: "https://www.yelp.com/biz/tonchin-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=_cMVPfyUD9o2kOB2TnfEIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Came in with my friend on a Friday night right at opening and we were lucky enough to be seated at the bar. Definitely a popular place so come early! My...",
      rating: 5,
      time_created: "2022-09-30 20:22:25",
      user: {
        id: "Hxvg66jj-7NjiosuGU8l7w",
        profile_url:
          "https://www.yelp.com/user_details?userid=Hxvg66jj-7NjiosuGU8l7w",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/e0-sOxV4CULZpvOHRHe8mg/o.jpg",
        name: "Patricia R.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "ZydFeo5IGx6gMbzC5Q-2Gw",
      url: "https://www.yelp.com/biz/tonchin-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ZydFeo5IGx6gMbzC5Q-2Gw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "My wife and I took my parents here on a Monday at around 6:45 -- it was around a 45 minute wait since we didn't have a reservation, but the ambiance was...",
      rating: 5,
      time_created: "2022-10-18 19:14:11",
      user: {
        id: "uzKgxSipSeRHvMxC1Z4r9A",
        profile_url:
          "https://www.yelp.com/user_details?userid=uzKgxSipSeRHvMxC1Z4r9A",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/QO_Glg3W62GZxJadsK7TrA/o.jpg",
        name: "Paul B.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "DyzJ7T6r_jBPcuWd-b9sxg",
      url: "https://www.yelp.com/biz/tonchin-new-york-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=DyzJ7T6r_jBPcuWd-b9sxg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Wow! Blown away by everything here, it definitely deserves its Michelin star.\n\nWe got:\n\n- SHIO-KOBU + UME + SESAME rice ball (vegan)\n- MAITAKE TEMPURA AND...",
      rating: 5,
      time_created: "2022-10-07 11:29:12",
      user: {
        id: "8-k0Sd655y5oodqJ4AfLUw",
        profile_url:
          "https://www.yelp.com/user_details?userid=8-k0Sd655y5oodqJ4AfLUw",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/Ka87Nj3zeFS_XpOwAa335w/o.jpg",
        name: "Avni N.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
domodomo = Business.create( name: "DOMODOMO - New York", yelp_id: "BPZfuPvSxCfoppU4lPFm0Q", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/YX89PDM_-aBCL2USyNyhuw/o.jpg", yelp_info: {
  id: "BPZfuPvSxCfoppU4lPFm0Q",
  alias: "domodomo-new-york-new-york-4",
  name: "DOMODOMO - New York",
  image_url:
    "https://s3-media1.fl.yelpcdn.com/bphoto/YX89PDM_-aBCL2USyNyhuw/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/domodomo-new-york-new-york-4?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+16467070301",
  display_phone: "(646) 707-0301",
  review_count: 1462,
  categories: [
    {
      alias: "japanese",
      title: "Japanese",
    },
    {
      alias: "sushi",
      title: "Sushi Bars",
    },
  ],
  rating: 4,
  location: {
    address1: "140 W Houston St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10012",
    country: "US",
    state: "NY",
    display_address: ["140 W Houston St", "New York, NY 10012"],
    cross_streets: "Sullivan St & Mac Dougal St",
  },
  coordinates: {
    latitude: 40.7280299,
    longitude: -74.00167,
  },
  photos: [
    "https://s3-media1.fl.yelpcdn.com/bphoto/YX89PDM_-aBCL2USyNyhuw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/C0FYCkHV_HAWVzid1FWYeA/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/ugnCOzeuHn9ePfW69l7_fQ/o.jpg",
  ],
  price: "$$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1430",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1500",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1430",
          day: 6,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2300",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["delivery"],
  yelp_reviews: [
    {
      id: "ir1q8vFTabMqU6MNzCYKBQ",
      url: "https://www.yelp.com/biz/domodomo-jersey-city-jersey-city-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ir1q8vFTabMqU6MNzCYKBQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "As soon as I walked in, the staff made me feel right at home. They were polite, courteous and genuinely nice! This amazing service continued throughout our...",
      rating: 5,
      time_created: "2022-10-15 10:10:09",
      user: {
        id: "aDTfqskCWepCNl-wM2gAdg",
        profile_url:
          "https://www.yelp.com/user_details?userid=aDTfqskCWepCNl-wM2gAdg",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/Q4c-lI7kL-gOfucyG2EtVw/o.jpg",
        name: "A L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "k_bwxE5HFLorX1Lhg5oRCQ",
      url: "https://www.yelp.com/biz/domodomo-jersey-city-jersey-city-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=k_bwxE5HFLorX1Lhg5oRCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: 'I had a 4 hour break before going back to work and wanted to have a "treat yo self" moment. Decided to come here after reading the reviews and seeing the...',
      rating: 5,
      time_created: "2022-10-07 10:22:50",
      user: {
        id: "2FxBGAoHJ2TeEWiHaQdVRA",
        profile_url:
          "https://www.yelp.com/user_details?userid=2FxBGAoHJ2TeEWiHaQdVRA",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/kSCF2gwtV1JIEeokUNGAUw/o.jpg",
        name: "John A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "jHm6XPmktvNxFk6wx-RPIw",
      url: "https://www.yelp.com/biz/domodomo-jersey-city-jersey-city-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=jHm6XPmktvNxFk6wx-RPIw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Hand roll special tasted good but not a true hand roll.\nThey're trying to be trendy by serving them like tacos but they're wrong.\nShould be cone...",
      rating: 3,
      time_created: "2022-09-05 22:38:13",
      user: {
        id: "RnstPTPAKRxWlFjOXne7lg",
        profile_url:
          "https://www.yelp.com/user_details?userid=RnstPTPAKRxWlFjOXne7lg",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/EiDaeWekua6GEHu7oMC1FA/o.jpg",
        name: "Metapod M.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
the_uncommons = Business.create( name: "The Uncommons", yelp_id: "h6qbszNgXgjj9Lrb62m-9w", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/23Mnb_KXYfPD2SAzEvB6YA/o.jpg", yelp_info: {
  id: "h6qbszNgXgjj9Lrb62m-9w",
  alias: "the-uncommons-new-york",
  name: "The Uncommons",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/23Mnb_KXYfPD2SAzEvB6YA/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/the-uncommons-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+16465439215",
  display_phone: "(646) 543-9215",
  review_count: 405,
  categories: [
    {
      alias: "coffee",
      title: "Coffee & Tea",
    },
    {
      alias: "tabletopgames",
      title: "Tabletop Games",
    },
    {
      alias: "beerbar",
      title: "Beer Bar",
    },
  ],
  rating: 4,
  location: {
    address1: "230 Thompson St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10012",
    country: "US",
    state: "NY",
    display_address: ["230 Thompson St", "New York, NY 10012"],
    cross_streets: "3rd St & Bleecker St",
  },
  coordinates: {
    latitude: 40.72933,
    longitude: -73.99865,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/23Mnb_KXYfPD2SAzEvB6YA/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/fIEk68sELwLsz8Q4YYn5Vw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/8bvHdOzDz0iyLXXJ1-4JYA/o.jpg",
  ],
  price: "$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1100",
          end: "2300",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2300",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2300",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2300",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "0000",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "0000",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2300",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["delivery"],
  yelp_reviews: [
    {
      id: "jBQ3xWfG3RFSbvlZVhw6-A",
      url: "https://www.yelp.com/biz/chess-forum-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=jBQ3xWfG3RFSbvlZVhw6-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This is a must-stop for anyone who's a chess player-from novice to grandmaster level-in New York City. I dropped by here yesterday in a very foul mood,...",
      rating: 5,
      time_created: "2022-07-08 12:15:24",
      user: {
        id: "ubOjPWwzyNWou9ZxW9NXdw",
        profile_url:
          "https://www.yelp.com/user_details?userid=ubOjPWwzyNWou9ZxW9NXdw",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/2ht8HjzzLbtQzeygm_3NKg/o.jpg",
        name: "Gerard P.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "jGupQgJ1ssElHbz9m0QY4Q",
      url: "https://www.yelp.com/biz/chess-forum-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=jGupQgJ1ssElHbz9m0QY4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Very chill down-to-earth place! \nIan was extremely genuine warm-hearted gentleman! He offered water bottles ( free of charge) to us without even being...",
      rating: 5,
      time_created: "2022-06-26 15:06:58",
      user: {
        id: "FZrZFZWVKe7FhZsrHQ_adg",
        profile_url:
          "https://www.yelp.com/user_details?userid=FZrZFZWVKe7FhZsrHQ_adg",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/ViTPxH5E1MO7rigWWw1zkA/o.jpg",
        name: "Cher Y.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "yI78RoF9ALZ3ocCjr3iSCg",
      url: "https://www.yelp.com/biz/chess-forum-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=yI78RoF9ALZ3ocCjr3iSCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This was such a unique experience and a cute shop. They have all different kinds of chess boards and they're all so unique. For $5 you can play a game of...",
      rating: 5,
      time_created: "2022-09-14 19:19:17",
      user: {
        id: "QPVTr6D2sPRf_RG6Q-q-3w",
        profile_url:
          "https://www.yelp.com/user_details?userid=QPVTr6D2sPRf_RG6Q-q-3w",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/M88bvFaydbbhGyCbB2B8mg/o.jpg",
        name: "May K.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
arabica = Business.create( name: "% Arabica", yelp_id: "ED7A7vDdg8yLNKJTSVHHmg", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/_3VSEFG3iUT-M66JYc7U4w/o.jpg", yelp_info: {
  id: "ED7A7vDdg8yLNKJTSVHHmg",
  alias: "arabica-brooklyn",
  name: "% Arabica",
  image_url:
    "https://s3-media4.fl.yelpcdn.com/bphoto/_3VSEFG3iUT-M66JYc7U4w/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/arabica-brooklyn?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+17188652551",
  display_phone: "(718) 865-2551",
  review_count: 167,
  categories: [
    {
      alias: "coffee",
      title: "Coffee & Tea",
    },
  ],
  rating: 4.5,
  location: {
    address1: "20 Old Fulton St",
    address2: "",
    address3: null,
    city: "Brooklyn",
    zip_code: "11201",
    country: "US",
    state: "NY",
    display_address: ["20 Old Fulton St", "Brooklyn, NY 11201"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 40.702601240302045,
    longitude: -73.99415047815798,
  },
  photos: [
    "https://s3-media4.fl.yelpcdn.com/bphoto/_3VSEFG3iUT-M66JYc7U4w/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/_rgLT3xVWG2jni0b6CVY2w/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/p0OeACweLGp5LVgMX-XkeQ/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 4,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 5,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "2000",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: [],
  yelp_reviews: [
    {
      id: "uSm--WZh3D3ic4oosrbbXg",
      url: "https://www.yelp.com/biz/kore-coffee-new-york-6?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=uSm--WZh3D3ic4oosrbbXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "So cute!!\nI went with my older sister and we loved it, we fell in love with the place, the drinks besides being very nice to the eyes also taste great and...",
      rating: 5,
      time_created: "2022-08-30 18:26:01",
      user: {
        id: "wYFVXTBr-1TpQmFmsfsteA",
        profile_url:
          "https://www.yelp.com/user_details?userid=wYFVXTBr-1TpQmFmsfsteA",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Ariana Y.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "JuERxehSKYbH8ye_X4Pzaw",
      url: "https://www.yelp.com/biz/kore-coffee-new-york-6?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=JuERxehSKYbH8ye_X4Pzaw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This has been my favorite gem in the lower east side area. Have been coming here since when they opened and everything did not disappoint. \n\nMatcha croffle;...",
      rating: 5,
      time_created: "2022-09-27 20:38:05",
      user: {
        id: "ZmNEibfa4k0rE5D6bbBLpg",
        profile_url:
          "https://www.yelp.com/user_details?userid=ZmNEibfa4k0rE5D6bbBLpg",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/I7vkqpjh08RwlTmrvu0lGQ/o.jpg",
        name: "Susan L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "TSRIU3c23YaNRgE1j5SqDA",
      url: "https://www.yelp.com/biz/kore-coffee-new-york-6?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=TSRIU3c23YaNRgE1j5SqDA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Three of us were in the mood yesterday after lunch for some cold sweet drinks, so we checked out this cool looking little shop. They had three iced latte...",
      rating: 5,
      time_created: "2022-09-14 09:18:50",
      user: {
        id: "zhSfihKkrixuu2i7TsbwwA",
        profile_url:
          "https://www.yelp.com/user_details?userid=zhSfihKkrixuu2i7TsbwwA",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/xpTldPk8SYIh8w7FByh05g/o.jpg",
        name: "Gordon Y.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
sweet_moment = Business.create( name: "Sweet Moment", yelp_id: "UZViRVpxNZvOM5KarmbT1g", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/9FgfPV5mK-FbcS6m3v-Nvg/o.jpg", yelp_info: {
  id: "UZViRVpxNZvOM5KarmbT1g",
  alias: "sweet-moment-new-york",
  name: "Sweet Moment",
  image_url:
    "https://s3-media4.fl.yelpcdn.com/bphoto/9FgfPV5mK-FbcS6m3v-Nvg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/sweet-moment-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12122268724",
  display_phone: "(212) 226-8724",
  review_count: 1004,
  categories: [
    {
      alias: "coffee",
      title: "Coffee & Tea",
    },
    {
      alias: "icecream",
      title: "Ice Cream & Frozen Yogurt",
    },
    {
      alias: "waffles",
      title: "Waffles",
    },
  ],
  rating: 4.5,
  location: {
    address1: "106 Mott St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10013",
    country: "US",
    state: "NY",
    display_address: ["106 Mott St", "New York, NY 10013"],
    cross_streets: "Canal St & Hester St",
  },
  coordinates: {
    latitude: 40.71763,
    longitude: -73.99714,
  },
  photos: [
    "https://s3-media4.fl.yelpcdn.com/bphoto/9FgfPV5mK-FbcS6m3v-Nvg/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/D6e0HSDQ2bb5NRRcr1xc5g/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/sdmnozeQ00vwP8cAcqsIoA/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1000",
          end: "2000",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "2000",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "2000",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "2000",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "2200",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "2200",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "2000",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["pickup", "delivery"],
  yelp_reviews: [
    {
      id: "dyaWjh8_SdNjHn4OxYmBug",
      url: "https://www.yelp.com/biz/sweet-moment-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=dyaWjh8_SdNjHn4OxYmBug&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "The macaroons are so yum!! \n\nThe coffee art is premade so it's only cold milk coffeeor milk tea. The foam layer tastes great, nice creamy and just perfect...",
      rating: 5,
      time_created: "2022-10-18 08:32:45",
      user: {
        id: "ZhsKwVMVq93N_Rc_jjN9mw",
        profile_url:
          "https://www.yelp.com/user_details?userid=ZhsKwVMVq93N_Rc_jjN9mw",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/kNKyK-Qk3bCk104Y8xPj5A/o.jpg",
        name: "Mellisa W.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "HcKEXkBRw2uySu2nHWcI8A",
      url: "https://www.yelp.com/biz/sweet-moment-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=HcKEXkBRw2uySu2nHWcI8A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "The mango and cheesecake shaved ice is perfect for a hot summer day! It's a combo of two of my favorite foods. The mango was sweet and soft. The cheesecake...",
      rating: 5,
      time_created: "2022-09-14 11:05:27",
      user: {
        id: "NKBwfOSNR0JAjV9h4lWywg",
        profile_url:
          "https://www.yelp.com/user_details?userid=NKBwfOSNR0JAjV9h4lWywg",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/HPw0k3fggf7IvOO-DmFQkA/o.jpg",
        name: "Xue C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "O6AWNy-JeBpsCDde-KWvqg",
      url: "https://www.yelp.com/biz/sweet-moment-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=O6AWNy-JeBpsCDde-KWvqg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Really love this place! It's in Chinatown and provide the cutest drinks and Asian desserts.\n\nWhen I went I got the red velvet drink and a couple of the...",
      rating: 5,
      time_created: "2022-09-09 11:01:20",
      user: {
        id: "4oYJ7To_F8P_wfv3B5dw4w",
        profile_url:
          "https://www.yelp.com/user_details?userid=4oYJ7To_F8P_wfv3B5dw4w",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/6SRQl-p8Y57CoyauSyemrQ/o.jpg",
        name: "Nicole C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
her_name_is_han = Business.create( name: "Her Name Is Han", yelp_id: "qY1o1MhoRyN84RRhUJtvpQ", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/SBjw3d1VlqSVEU5KMYpDdQ/o.jpg", yelp_info: { alias: "her-name-is-han-new-york-3", categories: [{alias: 'korean', title: 'Korean'}, {  alias: 'breakfast_brunch', title: 'Breakfast & Brunch'}, {  alias: 'cocktailbars', title: 'Cocktail Bars'}], coordinates: {latitude: 40.7462615966797, longitude: -73.984733581543}, display_phone: "(212) 779-9990", hours: [{  hours_type: "REGULAR",  is_open_now: true,  open: [    {is_overnight: false, start: '1200', end: '1430', day: 0},    {is_overnight: false, start: '1730', end: '2200', day: 0},    {is_overnight: false, start: '1200', end: '1430', day: 1},    {is_overnight: false, start: '1730', end: '2200', day: 1},    {is_overnight: false, start: '1200', end: '1430', day: 2},    {is_overnight: false, start: '1730', end: '2200', day: 2},    {is_overnight: false, start: '1200', end: '1430', day: 3},    {is_overnight: false, start: '1730', end: '2200', day: 3},    {is_overnight: false, start: '1200', end: '1430', day: 4},    {is_overnight: false, start: '1730', end: '2300', day: 4},    {is_overnight: false, start: '1200', end: '1430', day: 5},    {is_overnight: false, start: '1730', end: '2300', day: 5},    {is_overnight: false, start: '1200', end: '1430', day: 6},    {is_overnight: false, start: '1730', end: '2200', day: 6}  ]}], id: "qY1o1MhoRyN84RRhUJtvpQ", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/SBjw3d1VlqSVEU5KMYpDdQ/o.jpg", is_claimed: true, is_closed: false, location: {address1: '17 E 31st St', address2: '', address3: '', city: 'New York', country: "US",cross_streets: "5th Ave & Madison Ave",display_address: ["17 E 31st St", "New York, NY 10016"], state: "NY", zip_code: "10016"}, name: "Her Name Is Han", phone: "+12127799990", photos: ['https://s3-media2.fl.yelpcdn.com/bphoto/SBjw3d1VlqSVEU5KMYpDdQ/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/_Akdd-QYizdDS9O9hbr-MQ/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Jphf_ZYL6vnYirbA1RAZ4w/o.jpg'], price: "$$", rating: 4.5, review_count: 1606, special_hours: [], transactions: ['delivery', 'pickup'], url: "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg", yelp_reviews:  [{  cool: 0, foodRating: 5, funny: 0, id: "ZxKz2-SVG-E6ftIH0gBjOw", rating: 5, serviceRating: 5, text: "Excellent food and convenient location.  I will definitely come back for different menu items.", time_created: "2022-10-04 02:29:54", url: "https://www.yelp.com/biz/take31-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ZxKz2-SVG-E6ftIH0gBjOw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg", useful: 0, user: {  friends: 0, id: "9tXptfSc3uTh1yTGSARTQw", image_url: "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png", name: "Jihong L.", profile_url: "https://www.yelp.com/user_details?userid=9tXptfSc3uTh1yTGSARTQw", reviews: 0 }, yelpReview: true }, {  cool: 0, foodRating: 5, funny: 0, id: "-8LwAPC8Dhay2Yt8d4S9jg", rating: 5, serviceRating: 5, text: "Thanks to the staff for excellent customer service! They were very helpful when I called after my dinner requesting an itemized receipt for a business...", time_created: "2022-10-03 08:01:17", url: "https://www.yelp.com/biz/take31-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=-8LwAPC8Dhay2Yt8d4S9jg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg", useful: 0, user: {  friends: 0, id: "IEtgry1czdid92ah24x7pg", image_url: "https://s3-media4.fl.yelpcdn.com/photo/Cf0SoGDFDgvE5UBFhKIk9A/o.jpg", name: "Hannah H.", profile_url: "https://www.yelp.com/user_details?userid=IEtgry1czdid92ah24x7pg", reviews: 0 }, yelpReview: true}, {  cool: 0, foodRating: 5, funny: 0, id: "XtOCbYmuVOKlU-7fjYFfLQ", rating: 5, serviceRating: 5, text: "This place is so good. I go here monthly with my best friend so we can really take our time to really miss the Short Rib Chapaguri. \n\nThe food comes out as...", time_created: "2022-10-02 18:33:26", url: "https://www.yelp.com/biz/take31-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=XtOCbYmuVOKlU-7fjYFfLQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg", useful: 0, user: {  friends: 0, id: "L6hnXdo8YbvXP_Eqq4CVAw", image_url: "https://s3-media3.fl.yelpcdn.com/photo/_nE6DrVqT1-H0VzWGNpQCg/o.jpg", name: "Jade F.", profile_url: "https://www.yelp.com/user_details?userid=L6hnXdo8YbvXP_Eqq4CVAw", reviews: 0 }, yelpReview: true}]})
lappartement_4f = Business.create( name: "L'appartement 4F", yelp_id: "zMzH5TN6uieQj_mM68aUkw", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/3OKcDMAA5VsRHeJnyrKstw/o.jpg", yelp_info: {
  id: "zMzH5TN6uieQj_mM68aUkw",
  alias: "l-appartement-4f-brooklyn",
  name: "L'Appartement 4F",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/3OKcDMAA5VsRHeJnyrKstw/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/l-appartement-4f-brooklyn?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "",
  display_phone: "",
  review_count: 65,
  categories: [
    {
      alias: "bakeries",
      title: "Bakeries",
    },
  ],
  rating: 4,
  location: {
    address1: "115 Montague St",
    address2: "",
    address3: null,
    city: "Brooklyn",
    zip_code: "11201",
    country: "US",
    state: "NY",
    display_address: ["115 Montague St", "Brooklyn, NY 11201"],
    cross_streets: "Hicks St & Henry St",
  },
  coordinates: {
    latitude: 40.69521417249751,
    longitude: -73.99478573089799,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/3OKcDMAA5VsRHeJnyrKstw/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/cM2Z8MyoWGPPFkiKqwRCgA/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/Sc_Qjdudwy_RW7ajhes1dg/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0800",
          end: "1800",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1800",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1800",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1800",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1800",
          day: 4,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1800",
          day: 5,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1800",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: [],
  messaging: {
    url: "https://www.yelp.com/raq/zMzH5TN6uieQj_mM68aUkw?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg#popup%3Araq",
    use_case_text: "Message the Business",
  },
  yelp_reviews: [
    {
      id: "ljnbW_YMIg6LVte08yNJKQ",
      url: "https://www.yelp.com/biz/l-appartement-4f-brooklyn?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ljnbW_YMIg6LVte08yNJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: 'Cute addition to an overrated "blah" boring neighborhood.\nExcellent pastries that every hood needs to have .\nCan take the dough upstairs to the cool sec level .',
      rating: 5,
      time_created: "2022-10-19 08:02:13",
      user: {
        id: "vDWv9kF8MGa3hKI1lTjsIw",
        profile_url:
          "https://www.yelp.com/user_details?userid=vDWv9kF8MGa3hKI1lTjsIw",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/Nav2_avWF1gUdqUxS-Lunw/o.jpg",
        name: "Tsvika K.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "JMELTNYRWbmk_JNsrzUtww",
      url: "https://www.yelp.com/biz/l-appartement-4f-brooklyn?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=JMELTNYRWbmk_JNsrzUtww&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This place has a lot of buzz and it's very well deserved! We tried their almond Nutella croissant, and I'm usually not a huge fan of almond croissants but...",
      rating: 5,
      time_created: "2022-10-18 08:33:27",
      user: {
        id: "1RhuIeDfnCT0x3_BMTboAA",
        profile_url:
          "https://www.yelp.com/user_details?userid=1RhuIeDfnCT0x3_BMTboAA",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/6Crk3PyD92WK2A32OUjhEA/o.jpg",
        name: "Zehra S.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "xA_j3Dno88Wroc9zNSopAg",
      url: "https://www.yelp.com/biz/l-appartement-4f-brooklyn?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=xA_j3Dno88Wroc9zNSopAg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Amazing croissants!\n\nI went to L'appartement 4F on a Saturday at 3 pm. When I got there, there was a little line out the door, but since the place is really...",
      rating: 5,
      time_created: "2022-10-16 20:26:42",
      user: {
        id: "hBNV4iJFg6E4HE0kkRPg-g",
        profile_url:
          "https://www.yelp.com/user_details?userid=hBNV4iJFg6E4HE0kkRPg-g",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/ChbRs90mSCAcMhOowFInBQ/o.jpg",
        name: "Alicia L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
hakka_cuisine = Business.create( name: "Hakka Cuisine", yelp_id: "OXNPuN7KcjP9T5DdilgzdQ", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/DJIlWc9RS-7OYEIs05yvBw/o.jpg", yelp_info: {
  id: "OXNPuN7KcjP9T5DdilgzdQ",
  alias: "hakka-cuisine-new-york",
  name: "Hakka Cuisine",
  image_url:
    "https://s3-media1.fl.yelpcdn.com/bphoto/DJIlWc9RS-7OYEIs05yvBw/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/hakka-cuisine-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12129416888",
  display_phone: "(212) 941-6888",
  review_count: 12,
  categories: [
    {
      alias: "chinese",
      title: "Chinese",
    },
    {
      alias: "cocktailbars",
      title: "Cocktail Bars",
    },
  ],
  rating: 4,
  location: {
    address1: "11 Division St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10002",
    country: "US",
    state: "NY",
    display_address: ["11 Division St", "New York, NY 10002"],
    cross_streets: "Market St & Catherine St",
  },
  coordinates: {
    latitude: 40.71398,
    longitude: -73.9969,
  },
  photos: [
    "https://s3-media1.fl.yelpcdn.com/bphoto/DJIlWc9RS-7OYEIs05yvBw/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/pom5GsFm07IDljf5yb85ew/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/7C2aZe2uM4OgGITvy1fOHA/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: [],
  yelp_reviews: [
    {
      id: "kcrmcsgx7_7PdTXq-3rygA",
      url: "https://www.yelp.com/biz/hakka-cuisine-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=kcrmcsgx7_7PdTXq-3rygA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "The hakka dishes are great -- the mei cai pork has great flavor and my husband loved the hakka stuffed tofu (stuffed with pork). We also got lobster over...",
      rating: 5,
      time_created: "2022-10-01 19:33:36",
      user: {
        id: "obk7tfCIbnGqYjW6-HKU6w",
        profile_url:
          "https://www.yelp.com/user_details?userid=obk7tfCIbnGqYjW6-HKU6w",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/3Ug__7XsP1a5ESVSjuGflg/o.jpg",
        name: "Tansy W.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "Yj2eV8R2K8pX096YuzR8Xw",
      url: "https://www.yelp.com/biz/hakka-cuisine-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=Yj2eV8R2K8pX096YuzR8Xw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Dishes ordered:\n1. Hakka pan fried tofu - tofu was too stiff and bland\n2. Half chicken w. Ginger scallion dip - dry and not flavorful\n3. Fresh mushroom w...",
      rating: 2,
      time_created: "2022-09-13 17:07:00",
      user: {
        id: "D31-cgvT0wihnlcmINHmgg",
        profile_url:
          "https://www.yelp.com/user_details?userid=D31-cgvT0wihnlcmINHmgg",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/b1KbzmlFJIkhSNaq16cyEA/o.jpg",
        name: "Grace C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 2,
      serviceRating: 2,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "M_P3btbsBgiOgNajsOL7JA",
      url: "https://www.yelp.com/biz/hakka-cuisine-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=M_P3btbsBgiOgNajsOL7JA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "We accidently found this restaurant while searching for good Chinese food in China Town NYC, and we thought of give it a try. We were so pleased with all...",
      rating: 5,
      time_created: "2022-09-10 07:38:28",
      user: {
        id: "GM4cM6EJDZydRDzsRqG9KA",
        profile_url:
          "https://www.yelp.com/user_details?userid=GM4cM6EJDZydRDzsRqG9KA",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/nVwjx-XToyMtHSNmgDK6FA/o.jpg",
        name: "Ysn L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
house_of_joy = Business.create( name: "House of Joy", yelp_id: "9U5tPyF6QEiVntlyTemxKA", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/B3zS6dwpVYSKPQITTvpJNQ/o.jpg", yelp_info: {
  id: "9U5tPyF6QEiVntlyTemxKA",
  alias: "house-of-joy-new-york",
  name: "House of Joy",
  image_url:
    "https://s3-media4.fl.yelpcdn.com/bphoto/B3zS6dwpVYSKPQITTvpJNQ/o.jpg",
  is_claimed: false,
  is_closed: false,
  url: "https://www.yelp.com/biz/house-of-joy-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12122858688",
  display_phone: "(212) 285-8688",
  review_count: 155,
  categories: [
    {
      alias: "dimsum",
      title: "Dim Sum",
    },
  ],
  rating: 4.5,
  location: {
    address1: "28 Pell St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10013",
    country: "US",
    state: "NY",
    display_address: ["28 Pell St", "New York, NY 10013"],
    cross_streets: "Mott St & Doyers St",
  },
  coordinates: {
    latitude: 40.71510354400104,
    longitude: -73.998459,
  },
  photos: [
    "https://s3-media4.fl.yelpcdn.com/bphoto/B3zS6dwpVYSKPQITTvpJNQ/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/gCJq4OAzGyKlX1oCIVaNsg/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/Ng_DIdirLoJrP_jlbcga9Q/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0900",
          end: "2300",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "2300",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "2300",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "2300",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "2300",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["pickup", "delivery"],
  yelp_reviews: [
    {
      id: "jOPlL168iRF2qZMKTptmXQ",
      url: "https://www.yelp.com/biz/house-of-joy-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=jOPlL168iRF2qZMKTptmXQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Food (5/5): Came with a large group of around 10 people and we enjoyed most of dim sum dishes. The shumai, dumplings, and shrimp dishes are particularly...",
      rating: 5,
      time_created: "2022-10-16 20:20:35",
      user: {
        id: "SYXe1HJXcRKN8lgtBXPhfA",
        profile_url:
          "https://www.yelp.com/user_details?userid=SYXe1HJXcRKN8lgtBXPhfA",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/fVDO0i_wMqxr55lkBr3lWw/o.jpg",
        name: "Sofyan S.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "mZBZp0fkTAa0Q1dTv8Ttrw",
      url: "https://www.yelp.com/biz/house-of-joy-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=mZBZp0fkTAa0Q1dTv8Ttrw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Came here twice this past weekend, one for dinner and two days after for dim sum. The dinner selection tasted better than the dim sum. Review for dinner...",
      rating: 5,
      time_created: "2022-10-15 19:59:13",
      user: {
        id: "Q1G9kLHCKTuma-vhmhiTUQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=Q1G9kLHCKTuma-vhmhiTUQ",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/1Tkg4R1R0wk-cHE2o6h3NA/o.jpg",
        name: "Irene P.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "peaM3waI3s3U0pmS98uO3g",
      url: "https://www.yelp.com/biz/house-of-joy-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=peaM3waI3s3U0pmS98uO3g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This is only the house of JOY if you're Chinese. Took so long to order, missing items, had to ask for the servers many times. When we were there, it wasn't...",
      rating: 1,
      time_created: "2022-10-14 14:44:36",
      user: {
        id: "0lWn-wz9doEL4Sxa7qJvfQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=0lWn-wz9doEL4Sxa7qJvfQ",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/rhxcV7_WvAD8mN3QfVOvjQ/o.jpg",
        name: "Ngc A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 1,
      serviceRating: 1,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
gagopa_karaoke = Business.create( name: "Gagopa Karaoke", yelp_id: "D2AESr-Px4rMw7yLlCmLkQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/by0H42IKgvpbpv1j0ORVXg/o.jpg", yelp_info: {
  id: "D2AESr-Px4rMw7yLlCmLkQ",
  alias: "gagopa-karaoke-new-york",
  name: "Gagopa Karaoke",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/by0H42IKgvpbpv1j0ORVXg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/gagopa-karaoke-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+12129675353",
  display_phone: "(212) 967-5353",
  review_count: 288,
  categories: [
    {
      alias: "karaoke",
      title: "Karaoke",
    },
  ],
  rating: 4,
  location: {
    address1: "28 W 32nd St",
    address2: "",
    address3: "",
    city: "New York",
    zip_code: "10001",
    country: "US",
    state: "NY",
    display_address: ["28 W 32nd St", "New York, NY 10001"],
    cross_streets: "Broadway & 5th Ave",
  },
  coordinates: {
    latitude: 40.74758,
    longitude: -73.98709,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/by0H42IKgvpbpv1j0ORVXg/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/EQoMu0xeSyXicqW0NHbNiw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/nACsCJny57EHPp3UaqAx-A/o.jpg",
  ],
  price: "$",
  hours: [
    {
      open: [
        {
          is_overnight: true,
          start: "1830",
          end: "0400",
          day: 0,
        },
        {
          is_overnight: true,
          start: "1830",
          end: "0400",
          day: 1,
        },
        {
          is_overnight: true,
          start: "1830",
          end: "0400",
          day: 2,
        },
        {
          is_overnight: true,
          start: "1830",
          end: "0400",
          day: 3,
        },
        {
          is_overnight: true,
          start: "1800",
          end: "0400",
          day: 4,
        },
        {
          is_overnight: true,
          start: "1800",
          end: "0400",
          day: 5,
        },
        {
          is_overnight: true,
          start: "1900",
          end: "0400",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: [],
  yelp_reviews: [
    {
      id: "UGNSwkMJ-U293R-lZ1G3Og",
      url: "https://www.yelp.com/biz/gagopa-karaoke-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=UGNSwkMJ-U293R-lZ1G3Og&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Great BYOB karaoke spot in k-town that also sells super cheaper wine / beer / champagne. Some beers were $2 each!\n\nThe song selection is extensive here and...",
      rating: 5,
      time_created: "2022-05-31 13:33:42",
      user: {
        id: "IrZ37G3pEnPtH5wAk3DKdQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=IrZ37G3pEnPtH5wAk3DKdQ",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/SifU2ft0AX5vSNdvZDgRQw/o.jpg",
        name: "Ilana Z.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "YUUQKyap_8Bz-ZJWoejTag",
      url: "https://www.yelp.com/biz/gagopa-karaoke-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=YUUQKyap_8Bz-ZJWoejTag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "One of my go to noraebang places in ktown! The last visit we came without reservation but there was a room open -it was the first time I've come here where...",
      rating: 4,
      time_created: "2022-07-21 16:16:35",
      user: {
        id: "nSOf0NLbCxggtojX-BD0tg",
        profile_url:
          "https://www.yelp.com/user_details?userid=nSOf0NLbCxggtojX-BD0tg",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/3G4MzVkYmTrNOdKSP1-Mqw/o.jpg",
        name: "Emily G.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "AFR1ARrNbyCUysUr0cjmog",
      url: "https://www.yelp.com/biz/gagopa-karaoke-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=AFR1ARrNbyCUysUr0cjmog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "One of the few noraebang/karaoke places in/around ktown that you have a shot at booking last minute. The decor and feel is very 1990s Korean noraebang. Bare...",
      rating: 3,
      time_created: "2022-09-18 17:26:45",
      user: {
        id: "3m3Tw_0aBN9JTUiB-A7wnQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=3m3Tw_0aBN9JTUiB-A7wnQ",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/55Gwev58cOqf4PEHeBSKbQ/o.jpg",
        name: "Jun C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
okiboru_house_of_tsukemen = Business.create( name: "Okiboru House of Tsukemen", yelp_id: "FFzCto6PhZYZGUZLOICbTg", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/ZMLX6Znie-C78KABf0LawA/o.jpg", yelp_info: {
  id: "FFzCto6PhZYZGUZLOICbTg",
  alias: "okiboru-house-of-tsukemen-new-york",
  name: "Okiboru House of Tsukemen",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/ZMLX6Znie-C78KABf0LawA/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/okiboru-house-of-tsukemen-new-york?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+19179652223",
  display_phone: "(917) 965-2223",
  review_count: 40,
  categories: [
    {
      alias: "ramen",
      title: "Ramen",
    },
    {
      alias: "noodles",
      title: "Noodles",
    },
  ],
  rating: 4.5,
  location: {
    address1: "117 Orchard St",
    address2: null,
    address3: "",
    city: "New York",
    zip_code: "10002",
    country: "US",
    state: "NY",
    display_address: ["117 Orchard St", "New York, NY 10002"],
    cross_streets: "Rivington St & Delancey St",
  },
  coordinates: {
    latitude: 40.71934,
    longitude: -73.98971,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/ZMLX6Znie-C78KABf0LawA/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/9lgzRuWgU5iOQfej77YnxQ/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/SqpX4SwpPudjoktZge1Avw/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1200",
          end: "1500",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1500",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1500",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1500",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1500",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1300",
          end: "1700",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: [],
  messaging: {
    url: "https://www.yelp.com/raq/FFzCto6PhZYZGUZLOICbTg?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg#popup%3Araq",
    use_case_text: "Message the Business",
  },
  yelp_reviews: [
    {
      id: "l2F-da1O7-lRJqzo9aTl0g",
      url: "https://www.yelp.com/biz/thumbs-up-ramen-fort-lee?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=l2F-da1O7-lRJqzo9aTl0g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Definitely my new favorite ramen place. The only place around fort lee that has dipping ramen. The broth is sooo creamy. I liked adding the spicy sauce they...",
      rating: 5,
      time_created: "2022-10-16 14:44:37",
      user: {
        id: "DhOHZ61_Tno3j3yU2EMLZw",
        profile_url:
          "https://www.yelp.com/user_details?userid=DhOHZ61_Tno3j3yU2EMLZw",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/JplLMCoxFeChVMxxmF0aEA/o.jpg",
        name: "Diana H.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "YmbydumsEDvOEAkvr8CDeA",
      url: "https://www.yelp.com/biz/thumbs-up-ramen-fort-lee?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=YmbydumsEDvOEAkvr8CDeA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This is an excellent ramen place, loved their ramen bowl that comes with a creamy soup, chicken and pork pieces, lots of side ingredients including a soft...",
      rating: 4,
      time_created: "2022-10-15 19:41:36",
      user: {
        id: "ZDkgz9dbRuRbQaMB3d7ShQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=ZDkgz9dbRuRbQaMB3d7ShQ",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/-KsYoG26FolrJE5IlUINRw/o.jpg",
        name: "Nehal A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "onnDmmDFn21KeShIy8MVBA",
      url: "https://www.yelp.com/biz/thumbs-up-ramen-fort-lee?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=onnDmmDFn21KeShIy8MVBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Saw this place couple times finally got a chance to try it. \n\nFried chicken (Karaage) is very tender and juicy. Def top 3 on all the places I have been....",
      rating: 5,
      time_created: "2022-10-11 09:50:10",
      user: {
        id: "atxK3vuharFeS9SMWRwlXw",
        profile_url:
          "https://www.yelp.com/user_details?userid=atxK3vuharFeS9SMWRwlXw",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/jsT4QMPHeqDdft6jo9GZGA/o.jpg",
        name: "Wei H.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
app_academy_nyc = Business.create( name: "App Academy NYC", yelp_id: "fRfkzhgwDjKU72NCxNuKmg", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/zc_-5oyQ_8J1Ym9Ei0mU4g/o.jpg", yelp_info: {
  id: "fRfkzhgwDjKU72NCxNuKmg",
  alias: "app-academy-nyc-new-york-3",
  name: "App Academy NYC",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/zc_-5oyQ_8J1Ym9Ei0mU4g/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/app-academy-nyc-new-york-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "",
  display_phone: "",
  review_count: 113,
  categories: [
    {
      alias: "vocation",
      title: "Vocational & Technical School",
    },
  ],
  rating: 5,
  location: {
    address1: "90 5th Ave New York",
    address2: "",
    address3: null,
    city: "New York",
    zip_code: "10011",
    country: "US",
    state: "NY",
    display_address: ["90 5th Ave New York", "New York, NY 10011"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 40.7362862,
    longitude: -73.9937922,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/zc_-5oyQ_8J1Ym9Ei0mU4g/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/D06nBtpa-PNNeKgnywxaCw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/eRV3EtGh3sdmhslYqSacyg/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0900",
          end: "1800",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1800",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1800",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1800",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1800",
          day: 4,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: [],
  messaging: {
    url: "https://www.yelp.com/raq/fRfkzhgwDjKU72NCxNuKmg?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg#popup%3Araq",
    use_case_text: "Message the Business",
  },
  yelp_reviews: [
    {
      id: "R0rSX_bE88-DC3S-_oU4UQ",
      url: "https://www.yelp.com/biz/app-academy-nyc-new-york-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=R0rSX_bE88-DC3S-_oU4UQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Learned more in the program than I would by myself\n\nI enjoyed the program very much. It was well paced and definitely very intensive. They teach more than...",
      rating: 5,
      time_created: "2019-07-11 12:24:14",
      user: {
        id: "Flml5W1-uOi79B-PFVBcrw",
        profile_url:
          "https://www.yelp.com/user_details?userid=Flml5W1-uOi79B-PFVBcrw",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/qV3D2gFKl_yQzLnXBROSdA/o.jpg",
        name: "Jeffrey T.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "wuyOd1M-uUTQ5xOmpqksIQ",
      url: "https://www.yelp.com/biz/app-academy-nyc-new-york-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=wuyOd1M-uUTQ5xOmpqksIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "App Academy has team of instructors who give lectures on SW topics and help with projects. These instructors and the job search coaches are recent graduates...",
      rating: 3,
      time_created: "2022-07-27 06:28:54",
      user: {
        id: "lUKpmiBc4p9t_wmlS2-3rg",
        profile_url:
          "https://www.yelp.com/user_details?userid=lUKpmiBc4p9t_wmlS2-3rg",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Vera H.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "nbuqsG6-CpuMBGzGV32NLA",
      url: "https://www.yelp.com/biz/app-academy-nyc-new-york-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=nbuqsG6-CpuMBGzGV32NLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "I already knew App Academy would be tough before I applied, but I never would've thought it was the most difficult experience I had ever imagine. As someone...",
      rating: 5,
      time_created: "2019-06-28 09:16:32",
      user: {
        id: "S7GI4HE4BBWTeAbCR9bQZA",
        profile_url:
          "https://www.yelp.com/user_details?userid=S7GI4HE4BBWTeAbCR9bQZA",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/2M4C1aMoGis0HJSqi6UOMw/o.jpg",
        name: "Nicky L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
texas_pit_stop_bbq = Business.create( name: "Texas Pit Stop BBQ", yelp_id: "oFlG0LmtqujRty181Cmztw", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/x2act_IsP8-PtLA4yZQ_zA/o.jpg", yelp_info: {
  id: "oFlG0LmtqujRty181Cmztw",
  alias: "texas-pit-stop-bbq-la-marque",
  name: "Texas Pit Stop BBQ",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/x2act_IsP8-PtLA4yZQ_zA/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/texas-pit-stop-bbq-la-marque?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+14099352222",
  display_phone: "(409) 935-2222",
  review_count: 135,
  categories: [
    {
      alias: "bbq",
      title: "Barbeque",
    },
    {
      alias: "catering",
      title: "Caterers",
    },
  ],
  rating: 4,
  location: {
    address1: "2216 Ih 45",
    address2: "",
    address3: "",
    city: "La Marque",
    zip_code: "77568",
    country: "US",
    state: "TX",
    display_address: ["2216 Ih 45", "La Marque, TX 77568"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 29.3572389095459,
    longitude: -94.9772357940674,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/x2act_IsP8-PtLA4yZQ_zA/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/x78oOlTxtr7xxuyf5GQixA/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/cHaOG9NPtZxoqzV43gY3zA/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1100",
          end: "2100",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2100",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2100",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2100",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2100",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2100",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "1900",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["delivery"],
  yelp_reviews: [
    {
      id: "UDnb8jeisRb_RqpgCT1tyg",
      url: "https://www.yelp.com/biz/texas-pit-stop-bbq-la-marque?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=UDnb8jeisRb_RqpgCT1tyg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Food was amazing , sides were so rich and tasty .  It's good food . Fast service , brisker was soft and juicy",
      rating: 5,
      time_created: "2022-08-17 15:45:16",
      user: {
        id: "U8kkY_Cq4jZl1G_aWJf6sg",
        profile_url:
          "https://www.yelp.com/user_details?userid=U8kkY_Cq4jZl1G_aWJf6sg",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/TJgrU4HnSQLSg7CRp9JYSw/o.jpg",
        name: "Jay Morris M.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "cCJwN5E1es2bC9tXJ6QxgQ",
      url: "https://www.yelp.com/biz/texas-pit-stop-bbq-la-marque?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=cCJwN5E1es2bC9tXJ6QxgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This place used to be good\nNow u know y no cars in parking lot.\nCounter help terrible.",
      rating: 3,
      time_created: "2022-05-15 20:17:57",
      user: {
        id: "ySZLichuDAwEN-y0mA1KWA",
        profile_url:
          "https://www.yelp.com/user_details?userid=ySZLichuDAwEN-y0mA1KWA",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/v_5MagIHEW9RTL-IkxpKjQ/o.jpg",
        name: "Emmett T.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "x_AZFC3hsp0Xn543a0Rt6w",
      url: "https://www.yelp.com/biz/texas-pit-stop-bbq-la-marque?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=x_AZFC3hsp0Xn543a0Rt6w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Let's start with the reason for the visit, Food is good. I ordered stuffed baked potato and a drink, leaving still hungry compared to other competitors....",
      rating: 3,
      time_created: "2022-04-24 11:42:13",
      user: {
        id: "K44C1dtEriyremzaBnQvYQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=K44C1dtEriyremzaBnQvYQ",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/3squWinxFZUoE8-lX7lX4g/o.jpg",
        name: "José S.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
abaca = Business.create( name: "ABACÁ", yelp_id: "u2KkG0ucvooOdwgIgZPSlA", photo: "https://s3-media1.fl.yelpcdn.com/bphoto/C9u-0TKuuNmL3qjz5uz3PQ/o.jpg", yelp_info: {
  id: "u2KkG0ucvooOdwgIgZPSlA",
  alias: "abacá-san-francisco-3",
  name: "ABACÁ",
  image_url:
    "https://s3-media1.fl.yelpcdn.com/bphoto/C9u-0TKuuNmL3qjz5uz3PQ/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/abac%C3%A1-san-francisco-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+14154860788",
  display_phone: "(415) 486-0788",
  review_count: 271,
  categories: [
    {
      alias: "filipino",
      title: "Filipino",
    },
  ],
  rating: 4,
  location: {
    address1: "2700 Jones St",
    address2: "",
    address3: "",
    city: "San Francisco",
    zip_code: "94133",
    country: "US",
    state: "CA",
    display_address: ["2700 Jones St", "San Francisco, CA 94133"],
    cross_streets: "North Point St & Beach St",
  },
  coordinates: {
    latitude: 37.80680494183422,
    longitude: -122.41706588852709,
  },
  photos: [
    "https://s3-media1.fl.yelpcdn.com/bphoto/C9u-0TKuuNmL3qjz5uz3PQ/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/vNaWcjHJnoV4Hfh_cAqAsQ/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/Q77_Kg8dcu3gvdP-R8cOwg/o.jpg",
  ],
  price: "$$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0700",
          end: "1000",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0700",
          end: "1000",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0700",
          end: "1000",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0700",
          end: "1000",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0700",
          end: "1000",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 4,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 5,
        },
        {
          is_overnight: false,
          start: "0800",
          end: "1300",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: [],
  yelp_reviews: [
    {
      id: "i00BG-drTZhwW8LOhgv86w",
      url: "https://www.yelp.com/biz/abac%C3%A1-san-francisco-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=i00BG-drTZhwW8LOhgv86w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Just as advertised on their website, Abacá serves food with a contemporary spin. We had the Wagyu Tapsilog, chicken and waffles, and four different...",
      rating: 5,
      time_created: "2022-09-04 11:44:53",
      user: {
        id: "8NL75jQG5r4-S16xawasaw",
        profile_url:
          "https://www.yelp.com/user_details?userid=8NL75jQG5r4-S16xawasaw",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/GnADHqsSAl5boOlEi2X8Xg/o.jpg",
        name: "Angel G.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "BAh8cF_JFEc_xQBAo20J2Q",
      url: "https://www.yelp.com/biz/abac%C3%A1-san-francisco-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=BAh8cF_JFEc_xQBAo20J2Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Finally got to try the relatively new Filipino fusion restaurant Abaca! I honestly had low expectations for this restaurant because as a Filipino myself, I...",
      rating: 5,
      time_created: "2022-09-20 09:12:41",
      user: {
        id: "rOBWXa3V43ljtCU5ZGuXxA",
        profile_url:
          "https://www.yelp.com/user_details?userid=rOBWXa3V43ljtCU5ZGuXxA",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/m-8MDEPDgIJsuOhR-QhnFA/o.jpg",
        name: "Olivia M.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "6iZ3gyQGsmbvw4rdmVmBTA",
      url: "https://www.yelp.com/biz/abac%C3%A1-san-francisco-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=6iZ3gyQGsmbvw4rdmVmBTA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "This is my first time having elevated Filipino Cuisine.\n\nThe restaurant is located near Fisherman's Wharf.\nReservations are recommended.\nIt has a beautiful...",
      rating: 4,
      time_created: "2022-10-19 09:36:48",
      user: {
        id: "mjA94kyJfZGO3roqtZYVnQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=mjA94kyJfZGO3roqtZYVnQ",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/DAVsPB9o_Dcz-UmH2kVl7Q/o.jpg",
        name: "Juan Miguel S.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
kann = Business.create( name: "Kann", yelp_id: "pHO-ZgRRZR7FM_GkEpAASA", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/gmt7ym9vSmsp-AAd-Ls2gg/o.jpg", yelp_info: {
  id: "pHO-ZgRRZR7FM_GkEpAASA",
  alias: "kann-portland",
  name: "kann",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/gmt7ym9vSmsp-AAd-Ls2gg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/kann-portland?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+15037020290",
  display_phone: "(503) 702-0290",
  review_count: 44,
  categories: [
    {
      alias: "caribbean",
      title: "Caribbean",
    },
  ],
  rating: 4.5,
  location: {
    address1: "548 SE Ash St",
    address2: null,
    address3: "",
    city: "Portland",
    zip_code: "97214",
    country: "US",
    state: "OR",
    display_address: ["548 SE Ash St", "Portland, OR 97214"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 45.5213751,
    longitude: -122.6600392,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/gmt7ym9vSmsp-AAd-Ls2gg/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/a9MCEleQ1NUrqFTue3eA7g/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/Yl9xTlYS9dVxiZs_a1blEw/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1600",
          end: "2200",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1600",
          end: "2200",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1600",
          end: "2300",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1600",
          end: "2300",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1600",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: [],
  yelp_reviews: [
    {
      id: "g0XAoACmt9Jj1_7kvALJZw",
      url: "https://www.yelp.com/biz/kann-portland?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=g0XAoACmt9Jj1_7kvALJZw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "I have loved Chef Gregory's food for years now since his time at Departure and on Top Chef. I was invited to Kann by my friend and we sat at the bar. It was...",
      rating: 5,
      time_created: "2022-10-13 06:09:29",
      user: {
        id: "rkjXNgVmPie881uBp4mrHg",
        profile_url:
          "https://www.yelp.com/user_details?userid=rkjXNgVmPie881uBp4mrHg",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/sqihl4xn4LW3-lh0pJtL4Q/o.jpg",
        name: "M K.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "AfQAQmpIQyW9OJ7dx8Z1tA",
      url: "https://www.yelp.com/biz/kann-portland?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=AfQAQmpIQyW9OJ7dx8Z1tA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "I had really high hopes for Kann as there has been so much hype. I love trying new restaurants and was optimistic based on all of the reviews I had seen....",
      rating: 3,
      time_created: "2022-10-11 10:41:58",
      user: {
        id: "X568BojbbH6cAxqXU5zLwA",
        profile_url:
          "https://www.yelp.com/user_details?userid=X568BojbbH6cAxqXU5zLwA",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/xMh_JXu61vxTMBqedY7cWQ/o.jpg",
        name: "Ophelia Y.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 3,
      serviceRating: 3,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "QI9p8OdYBMG5-Ip0EaFVWA",
      url: "https://www.yelp.com/biz/kann-portland?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=QI9p8OdYBMG5-Ip0EaFVWA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "I had the absolutely pleasure of securing a reservation at Kann this past weekend. \n\nATMOSPHERE/INTERIOR\nOur reservation was for 4 PM -- at 3:55, the staff...",
      rating: 5,
      time_created: "2022-10-10 13:50:06",
      user: {
        id: "meff4yE5gLIYIXt4G6BPmQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=meff4yE5gLIYIXt4G6BPmQ",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/3ZL_wFJD02td5bmZuhM5MQ/o.jpg",
        name: "Sarah C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
tito_and_pep = Business.create( name: "Tito & Pep", yelp_id: "tkyHFPJ3dBsjE2hA_tk_sQ", photo: "https://s3-media4.fl.yelpcdn.com/bphoto/JZdDgPdOYdPziHRY1j1yWQ/o.jpg", yelp_info: {
  id: "tkyHFPJ3dBsjE2hA_tk_sQ",
  alias: "tito-and-pep-tucson-2",
  name: "Tito & Pep",
  image_url:
    "https://s3-media4.fl.yelpcdn.com/bphoto/JZdDgPdOYdPziHRY1j1yWQ/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/tito-and-pep-tucson-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+15202070116",
  display_phone: "(520) 207-0116",
  review_count: 472,
  categories: [
    {
      alias: "newamerican",
      title: "American (New)",
    },
    {
      alias: "cocktailbars",
      title: "Cocktail Bars",
    },
  ],
  rating: 4.5,
  location: {
    address1: "4122 E Speedway Blvd",
    address2: "",
    address3: null,
    city: "Tucson",
    zip_code: "85712",
    country: "US",
    state: "AZ",
    display_address: ["4122 E Speedway Blvd", "Tucson, AZ 85712"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 32.2359378837897,
    longitude: -110.904669545616,
  },
  photos: [
    "https://s3-media4.fl.yelpcdn.com/bphoto/JZdDgPdOYdPziHRY1j1yWQ/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/sxJ7uglIBXEfWf9ij4Z9Zg/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/P2eJ4tehDHxXlLbZ3DvzEg/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2100",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["delivery"],
  yelp_reviews: [
    {
      id: "nQk5UMAgCeOvTflXGLG_bQ",
      url: "https://www.yelp.com/biz/rollies-mexican-patio-tucson-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=nQk5UMAgCeOvTflXGLG_bQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "The Carne Asada Street Tacos and Carne Asada Burrito were delicious.  I will definitely be going back.",
      rating: 5,
      time_created: "2022-09-02 20:22:57",
      user: {
        id: "0HVrL5mO5w2u3xHdvw_stQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=0HVrL5mO5w2u3xHdvw_stQ",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Juan B.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "G9LzISV1_5vp7KbQA6jFzg",
      url: "https://www.yelp.com/biz/rollies-mexican-patio-tucson-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=G9LzISV1_5vp7KbQA6jFzg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "My sister brought me to Rollies. I'm a big pan of quesabirria tacos, but I had never heard of birria ramen before. \n\nWhile I prefer goat in my birria, it's...",
      rating: 5,
      time_created: "2022-10-01 15:22:19",
      user: {
        id: "5yJZkmlvuZUwDqCkCMtvnQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=5yJZkmlvuZUwDqCkCMtvnQ",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/zwCbmaDiAayvRzv5KlZjWw/o.jpg",
        name: "Sara E.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "ndxbPp676QdIzZ-GGtlU3A",
      url: "https://www.yelp.com/biz/rollies-mexican-patio-tucson-3?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ndxbPp676QdIzZ-GGtlU3A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "After watching a few YouTubers' reviews for Rollies Mexican Patio, I drove across town to check out what the rave is all about. Rollies is located deep in...",
      rating: 2,
      time_created: "2022-07-24 15:09:20",
      user: {
        id: "lYu0e98ZSNeXIjcLpkjhhA",
        profile_url:
          "https://www.yelp.com/user_details?userid=lYu0e98ZSNeXIjcLpkjhhA",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/q-0Xtx_jJOcYoQjn1nYJ5A/o.jpg",
        name: "Roland W.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 2,
      serviceRating: 2,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
locust = Business.create( name: "Locust", yelp_id: "IWRClXjIBarIbY7WUWV-ug", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/mY2Gb4A--GAQscRNqz25MA/o.jpg", yelp_info: {
  id: "IWRClXjIBarIbY7WUWV-ug",
  alias: "locust-nashville",
  name: "Locust",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/mY2Gb4A--GAQscRNqz25MA/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/locust-nashville?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+16152053737",
  display_phone: "(615) 205-3737",
  review_count: 99,
  categories: [
    {
      alias: "shavedice",
      title: "Shaved Ice",
    },
    {
      alias: "noodles",
      title: "Noodles",
    },
    {
      alias: "seafood",
      title: "Seafood",
    },
  ],
  rating: 4.5,
  location: {
    address1: "2305 12th Ave S",
    address2: null,
    address3: null,
    city: "Nashville",
    zip_code: "37204",
    country: "US",
    state: "TN",
    display_address: ["2305 12th Ave S", "Nashville, TN 37204"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 36.127384,
    longitude: -86.789372,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/mY2Gb4A--GAQscRNqz25MA/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/tNLz6Wvp127wzEox6Ocp4w/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/JvxCmW4YLo-KjCwmTVHKqw/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1200",
          end: "1400",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1400",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1200",
          end: "1400",
          day: 6,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2030",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: ["delivery"],
  yelp_reviews: [
    {
      id: "f-p_GNy5Z-rh5qp7j2Mh0g",
      url: "https://www.yelp.com/biz/locust-nashville?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=f-p_GNy5Z-rh5qp7j2Mh0g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "In my short two day trip to Nashville, I feel so very lucky to have been able to grab a last minute lunch reservation at Locust. I saw their limited menu...",
      rating: 5,
      time_created: "2022-08-23 21:54:31",
      user: {
        id: "OCsxaX64_3pyU6h_5s2RsQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=OCsxaX64_3pyU6h_5s2RsQ",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/ZwHtUiaI7HfBpZ1zAXVtNQ/o.jpg",
        name: "Leila L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "RzGxb0TQNz_jlE54Ia42rA",
      url: "https://www.yelp.com/biz/locust-nashville?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=RzGxb0TQNz_jlE54Ia42rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Brutally underwhelming & Disappointing....   Call me spoiled but I've been to some of the most badass restaurants around the country and I expect high...",
      rating: 1,
      time_created: "2022-09-03 19:41:09",
      user: {
        id: "89iRhjOcXMTHXRfo4Q1zWQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=89iRhjOcXMTHXRfo4Q1zWQ",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/kmqrb2GFJej0E1Z7XpzCzA/o.jpg",
        name: "Dane M.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 1,
      serviceRating: 1,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "SaWmUv1qM-474BUcAmi3Sg",
      url: "https://www.yelp.com/biz/locust-nashville?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=SaWmUv1qM-474BUcAmi3Sg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "On a college student's budget, Locust might initially seem a bit pricy but I do think the experience you get is worth it (maybe for a special...",
      rating: 4,
      time_created: "2022-08-20 07:13:45",
      user: {
        id: "u8qVW9bWaJ6OnKbCiqjArw",
        profile_url:
          "https://www.yelp.com/user_details?userid=u8qVW9bWaJ6OnKbCiqjArw",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/SIMvcTg9pRfBw1AGp8b4Kw/o.jpg",
        name: "Sahas G.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
kittys_cafe = Business.create( name: "Kitty's Cafe", yelp_id: "HZ1IvAelEY5xnjBt9f5L2A", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/5kiMZpIVfiOF4kpwgPOZeg/o.jpg", yelp_info: {
  id: "HZ1IvAelEY5xnjBt9f5L2A",
  alias: "kittys-cafe-kansas-city",
  name: "Kitty's Cafe",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/5kiMZpIVfiOF4kpwgPOZeg/o.jpg",
  is_claimed: false,
  is_closed: false,
  url: "https://www.yelp.com/biz/kittys-cafe-kansas-city?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+18167539711",
  display_phone: "(816) 753-9711",
  review_count: 130,
  categories: [
    {
      alias: "sandwiches",
      title: "Sandwiches",
    },
    {
      alias: "tradamerican",
      title: "American (Traditional)",
    },
  ],
  rating: 4.5,
  location: {
    address1: "810 E 31st St",
    address2: "",
    address3: "",
    city: "Kansas City",
    zip_code: "64109",
    country: "US",
    state: "MO",
    display_address: ["810 E 31st St", "Kansas City, MO 64109"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 39.07088,
    longitude: -94.57478,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/5kiMZpIVfiOF4kpwgPOZeg/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/n3XNy6uUlSLPII3rtLvRuQ/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/ajE2mP46Gg5JnnWZdGs6JQ/o.jpg",
  ],
  price: "$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0900",
          end: "1700",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1700",
          day: 1,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1700",
          day: 2,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1700",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1700",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "1500",
          day: 5,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["delivery"],
  yelp_reviews: [
    {
      id: "8auzUkLng04z2a6EiQdRuA",
      url: "https://www.yelp.com/biz/filling-station-midtown-kansas-city?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=8auzUkLng04z2a6EiQdRuA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "What a great little coffee shop!  I love the ambience of the old filling station building; inside, it's open, airy and very welcoming.\n\nThe staff is...",
      rating: 5,
      time_created: "2022-09-19 13:08:06",
      user: {
        id: "8tKHDj2_oi900GbzEKc-Uw",
        profile_url:
          "https://www.yelp.com/user_details?userid=8tKHDj2_oi900GbzEKc-Uw",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Carol H.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "w0zHayruYb4FgJmedLGN3Q",
      url: "https://www.yelp.com/biz/filling-station-midtown-kansas-city?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=w0zHayruYb4FgJmedLGN3Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Love this coffee place to catch up on any homework, reading, or just to have good coffee and food. \n\nThis was actually my first time ordering food from the...",
      rating: 4,
      time_created: "2022-09-12 07:50:18",
      user: {
        id: "2nZQQzJ8bYX-vNBjLKK2HA",
        profile_url:
          "https://www.yelp.com/user_details?userid=2nZQQzJ8bYX-vNBjLKK2HA",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/tKotDC7expEXGms9sY09ZA/o.jpg",
        name: "Gema A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "kkvGKBxPSBW9AxlnO5piaA",
      url: "https://www.yelp.com/biz/filling-station-midtown-kansas-city?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=kkvGKBxPSBW9AxlnO5piaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Great coffee shop with healthy juice and some good options. A little pricy but great flavor.",
      rating: 5,
      time_created: "2022-08-13 09:18:13",
      user: {
        id: "u46FmhmMwHk3jbFbWEdVbg",
        profile_url:
          "https://www.yelp.com/user_details?userid=u46FmhmMwHk3jbFbWEdVbg",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/GAQ6tNvlufTv2G31vfv2bw/o.jpg",
        name: "Jana S.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
pemberton_phx = Business.create( name: "Pemberton PHX", yelp_id: "FjaGfXVysSbOBnv0T41v3Q", photo: "https://s3-media2.fl.yelpcdn.com/bphoto/vLcWNaFWKH0GhLzYtrFL6Q/o.jpg", yelp_info: {
  id: "FjaGfXVysSbOBnv0T41v3Q",
  alias: "pemberton-phx-phoenix",
  name: "Pemberton PHX",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/vLcWNaFWKH0GhLzYtrFL6Q/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/pemberton-phx-phoenix?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "",
  display_phone: "",
  review_count: 82,
  categories: [
    {
      alias: "bars",
      title: "Bars",
    },
    {
      alias: "outdoormovies",
      title: "Outdoor Movies",
    },
  ],
  rating: 4.5,
  location: {
    address1: "1121 N 2nd St",
    address2: null,
    address3: "",
    city: "Phoenix",
    zip_code: "85004",
    country: "US",
    state: "AZ",
    display_address: ["1121 N 2nd St", "Phoenix, AZ 85004"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 33.460775,
    longitude: -112.0708317,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/vLcWNaFWKH0GhLzYtrFL6Q/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/YDeE-kGtFwGnqQpI1pJD2w/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/TH8IeWeV0l9EbKsBrJV_Lg/o.jpg",
  ],
  price: "$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1800",
          end: "2300",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1800",
          end: "2300",
          day: 3,
        },
        {
          is_overnight: true,
          start: "1800",
          end: "0100",
          day: 4,
        },
        {
          is_overnight: true,
          start: "1800",
          end: "0100",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1800",
          end: "2300",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: [],
  messaging: {
    url: "https://www.yelp.com/raq/FjaGfXVysSbOBnv0T41v3Q?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg#popup%3Araq",
    use_case_text: "Message the Business",
  },
  yelp_reviews: [
    {
      id: "3Wk1yZz_q0MgUedHLvrmOw",
      url: "https://www.yelp.com/biz/pemberton-phx-phoenix?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=3Wk1yZz_q0MgUedHLvrmOw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "It was really nice! I do wish there were more things opened at night but as a Miami local I know  the nightlife won't compare. I loved the food options and...",
      rating: 4,
      time_created: "2022-09-11 11:28:30",
      user: {
        id: "oYGyFIgPeLax2vZAP8KOhw",
        profile_url:
          "https://www.yelp.com/user_details?userid=oYGyFIgPeLax2vZAP8KOhw",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Al A.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "ZCvuG970n1KHbu_Vtvf_ig",
      url: "https://www.yelp.com/biz/pemberton-phx-phoenix?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ZCvuG970n1KHbu_Vtvf_ig&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "So cute!! They do check ID at the door so come prepared for that. If you don't plan on I'm imbibing then it's an easy in!\n\nThis place is so gosh darn cute!...",
      rating: 5,
      time_created: "2022-09-25 20:46:18",
      user: {
        id: "kjpg67PSJaDFFnvuJwLrMA",
        profile_url:
          "https://www.yelp.com/user_details?userid=kjpg67PSJaDFFnvuJwLrMA",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/P4Qt-SWf42A-1GFwvIGVqQ/o.jpg",
        name: "Calvin Y.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "neSfcVWd4G4VHRXFUsN_zQ",
      url: "https://www.yelp.com/biz/pemberton-phx-phoenix?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=neSfcVWd4G4VHRXFUsN_zQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "haven't had too much exposure to this place (i've been once lol) so i do need to try more of the food options! I appreciate recommendations. The drink that...",
      rating: 4,
      time_created: "2022-10-17 20:19:39",
      user: {
        id: "FE5g4KkmaCrzSYzXnfYD1w",
        profile_url:
          "https://www.yelp.com/user_details?userid=FE5g4KkmaCrzSYzXnfYD1w",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/k3ZQvhwGTNcMI2le667mMg/o.jpg",
        name: "Valerie C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
neptune_oyster = Business.create( name: "Neptune Oyster", yelp_id: "y2w6rFaO0XEiG5mFfOsiFA", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/ZVaN5dj-yCVIiPk7VtFhOw/o.jpg", yelp_info: {
  id: "y2w6rFaO0XEiG5mFfOsiFA",
  alias: "neptune-oyster-boston",
  name: "Neptune Oyster",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/ZVaN5dj-yCVIiPk7VtFhOw/o.jpg",
  is_claimed: false,
  is_closed: false,
  url: "https://www.yelp.com/biz/neptune-oyster-boston?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+16177423474",
  display_phone: "(617) 742-3474",
  review_count: 5803,
  categories: [
    {
      alias: "seafood",
      title: "Seafood",
    },
    {
      alias: "salad",
      title: "Salad",
    },
    {
      alias: "sandwiches",
      title: "Sandwiches",
    },
  ],
  rating: 4.5,
  location: {
    address1: "63 Salem St",
    address2: "",
    address3: "",
    city: "Boston",
    zip_code: "02113",
    country: "US",
    state: "MA",
    display_address: ["63 Salem St", "Boston, MA 02113"],
    cross_streets: "Hull St & Stillman St",
  },
  coordinates: {
    latitude: 42.36321,
    longitude: -71.05594,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/ZVaN5dj-yCVIiPk7VtFhOw/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/C38W5pjJWCY7IJZaV_p6Tw/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/ThCF0dNqUIdvqEDgsCu55w/o.jpg",
  ],
  price: "$$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1100",
          end: "2130",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2130",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2130",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2130",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2130",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2230",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1100",
          end: "2230",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: true,
    },
  ],
  transactions: ["delivery"],
  yelp_reviews: [
    {
      id: "wVqqjcPzPAhNeWTpvu2_lA",
      url: "https://www.yelp.com/biz/paulis-boston?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=wVqqjcPzPAhNeWTpvu2_lA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "It was great the lobster roll is the best one yet comparing neptune oyster. But not comfortable to eat inside of place.",
      rating: 5,
      time_created: "2022-09-22 12:15:08",
      user: {
        id: "_chRJdzhZZdF0RtCJ-MQfg",
        profile_url:
          "https://www.yelp.com/user_details?userid=_chRJdzhZZdF0RtCJ-MQfg",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Arda C.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "rQ-toW1n7HTfmSNo57pVxg",
      url: "https://www.yelp.com/biz/paulis-boston?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=rQ-toW1n7HTfmSNo57pVxg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Great lobsters roll in the boston area\nPROs:\n-Very affordable lobster roll for the price. If you go to other places, at least $36/roll\n-Indoor...",
      rating: 5,
      time_created: "2022-10-18 09:52:14",
      user: {
        id: "5QYD0L3xlc3PBlu24VjGgQ",
        profile_url:
          "https://www.yelp.com/user_details?userid=5QYD0L3xlc3PBlu24VjGgQ",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/oZPTs7HDDQShj7Ca4w0duA/o.jpg",
        name: "Jackie T.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "Od0mtmCeWF2Ug5S6uXA8cA",
      url: "https://www.yelp.com/biz/paulis-boston?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=Od0mtmCeWF2Ug5S6uXA8cA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Great menu-lots of choices. They have gluten free sandwiches (if that's your thing), bfast Sammie's and salads.\nI ordered the lobster roll (cold) and a bag...",
      rating: 4,
      time_created: "2022-10-15 08:57:19",
      user: {
        id: "ALLoYB3r6jfm-DrP7SAn8A",
        profile_url:
          "https://www.yelp.com/user_details?userid=ALLoYB3r6jfm-DrP7SAn8A",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/Qvr7CJGGEsfd62QQlzKAKg/o.jpg",
        name: "Belen O.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
freya = Business.create( name: "Freya", yelp_id: "d-5lyKTcTy10JSrBnR3q0A", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/f7paso4_IHY5oNFO-HTJ6A/o.jpg", yelp_info: {
  id: "d-5lyKTcTy10JSrBnR3q0A",
  alias: "freya-detroit",
  name: "Freya",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/f7paso4_IHY5oNFO-HTJ6A/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/freya-detroit?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+13133515544",
  display_phone: "(313) 351-5544",
  review_count: 42,
  categories: [
    {
      alias: "newamerican",
      title: "American (New)",
    },
    {
      alias: "tradamerican",
      title: "American (Traditional)",
    },
  ],
  rating: 4.5,
  location: {
    address1: "2929 E Grand Blvd",
    address2: null,
    address3: "",
    city: "Detroit",
    zip_code: "48202",
    country: "US",
    state: "MI",
    display_address: ["2929 E Grand Blvd", "Detroit, MI 48202"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 42.372168868609904,
    longitude: -83.0669829,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/f7paso4_IHY5oNFO-HTJ6A/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/udQq6mCZRBIvYvG1jTWYdw/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/jI0yoY84-9ZMNZmM9_kkRQ/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1700",
          end: "2130",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2130",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2130",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2130",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1700",
          end: "2130",
          day: 5,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: [],
  yelp_reviews: [
    {
      id: "RGl1sx8NQI06Poa9USMA2Q",
      url: "https://www.yelp.com/biz/dragonfly-detroit-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=RGl1sx8NQI06Poa9USMA2Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Fun little spot for shareable bites and cocktails! The service was friendly and helpful, though not particularly fast.\n\nOur group of 4 split the duck...",
      rating: 5,
      time_created: "2022-10-16 14:44:05",
      user: {
        id: "jsWyDnNiF2umqSp_jT1L_A",
        profile_url:
          "https://www.yelp.com/user_details?userid=jsWyDnNiF2umqSp_jT1L_A",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/cwAnDEWt3zRoRUB3cbKT7g/o.jpg",
        name: "Arturo F.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "YvoPHEG9RjpF-u0avCBFNw",
      url: "https://www.yelp.com/biz/dragonfly-detroit-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=YvoPHEG9RjpF-u0avCBFNw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Such a fun spot for cocktails and a bite to eat! Dragonfly has a great atmosphere and excellent wait staff. It's a smaller, quaint establishment with funky...",
      rating: 4,
      time_created: "2022-08-07 18:04:38",
      user: {
        id: "vNFdv57j6TZiKr1kLIJXug",
        profile_url:
          "https://www.yelp.com/user_details?userid=vNFdv57j6TZiKr1kLIJXug",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/photo/2zrMgI7IpK5voR6QoXjI6w/o.jpg",
        name: "Taylor O.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 4,
      serviceRating: 4,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "48EyLM7lTddKHE155mLg4Q",
      url: "https://www.yelp.com/biz/dragonfly-detroit-2?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=48EyLM7lTddKHE155mLg4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Perhaps the best happy hour in Detroit right now??? I was introduced to Dragonfly through a Yelp drink mixing event a few months back and definitely wanted...",
      rating: 5,
      time_created: "2022-07-03 08:59:12",
      user: {
        id: "7knK05R5Z6fqsbofIcwgvg",
        profile_url:
          "https://www.yelp.com/user_details?userid=7knK05R5Z6fqsbofIcwgvg",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/photo/x3aFNC23qJFV011cZZfCpQ/o.jpg",
        name: "Gaston N.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})
brennans = Business.create( name: "Brennan's", yelp_id: "ku8cAVBLaF_4rI-yK6gNnQ", photo: "https://s3-media3.fl.yelpcdn.com/bphoto/c1YZ71bFC6sJdKDxzNvbGg/o.jpg", yelp_info: {
  id: "ku8cAVBLaF_4rI-yK6gNnQ",
  alias: "brennans-new-orleans",
  name: "Brennan's",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/c1YZ71bFC6sJdKDxzNvbGg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/brennans-new-orleans?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=B1YfLhw7dNPhi18DuAYVCg",
  phone: "+15045259711",
  display_phone: "(504) 525-9711",
  review_count: 1726,
  categories: [
    {
      alias: "cajun",
      title: "Cajun/Creole",
    },
  ],
  rating: 4,
  location: {
    address1: "417 Royal St",
    address2: "",
    address3: "",
    city: "New Orleans",
    zip_code: "70130",
    country: "US",
    state: "LA",
    display_address: ["417 Royal St", "New Orleans, LA 70130"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 29.9560036328058,
    longitude: -90.066655935845,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/c1YZ71bFC6sJdKDxzNvbGg/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/FZxOQkl4riewlVDgMP0BqA/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/p-HBEbVB7qqkszpiXX-bjw/o.jpg",
  ],
  price: "$$$",
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "0900",
          end: "1400",
          day: 0,
        },
        {
          is_overnight: false,
          start: "1800",
          end: "2200",
          day: 0,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1400",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1800",
          end: "2200",
          day: 3,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1400",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1800",
          end: "2200",
          day: 4,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1400",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1800",
          end: "2200",
          day: 5,
        },
        {
          is_overnight: false,
          start: "0900",
          end: "1400",
          day: 6,
        },
        {
          is_overnight: false,
          start: "1800",
          end: "2200",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: [],
  yelp_reviews: [
    {
      id: "v1xiqcVx9gjpp77TmKr8IQ",
      url: "https://www.yelp.com/biz/brennans-new-orleans?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=v1xiqcVx9gjpp77TmKr8IQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "We just had a wonderful dinner with a group of 6. Tim was assisting and was absolutely wonderful! He made the experience that much better! Would definitely...",
      rating: 5,
      time_created: "2022-09-09 19:08:08",
      user: {
        id: "TUpwjJ81jDKy1ruksHE4bw",
        profile_url:
          "https://www.yelp.com/user_details?userid=TUpwjJ81jDKy1ruksHE4bw",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
        name: "Andrew L.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "ApGXf_hKtW3rljolCBMPEw",
      url: "https://www.yelp.com/biz/brennans-new-orleans?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ApGXf_hKtW3rljolCBMPEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "Amazing dinner place in NOLA. Made reservations weeks ahead of our trip to NOLA and so glad we did. They do take minimal walk-ins but you may have a long...",
      rating: 5,
      time_created: "2022-10-18 16:29:23",
      user: {
        id: "16c91F4TZSA_WjO4XmsBMg",
        profile_url:
          "https://www.yelp.com/user_details?userid=16c91F4TZSA_WjO4XmsBMg",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/photo/Avx9oPIwNCvGut39Y4JlMg/o.jpg",
        name: "Jane M.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
    {
      id: "ng7brX2tM7fUDhd-_ArfAw",
      url: "https://www.yelp.com/biz/brennans-new-orleans?adjust_creative=B1YfLhw7dNPhi18DuAYVCg&hrid=ng7brX2tM7fUDhd-_ArfAw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=B1YfLhw7dNPhi18DuAYVCg",
      text: "What a wonderful brunch this was on Monday 10/03/22 for my bachelorette party! Food were delicious and our server was amazing. \n\nDecors are so darling! Pink...",
      rating: 5,
      time_created: "2022-10-06 09:41:25",
      user: {
        id: "8XTCsml2_n5616mlmuUo4g",
        profile_url:
          "https://www.yelp.com/user_details?userid=8XTCsml2_n5616mlmuUo4g",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/photo/4S2lQeawtmmYmSlK7JVkGw/o.jpg",
        name: "Abigail B.",
        friends: 0,
        reviews: 0,
      },
      foodRating: 5,
      serviceRating: 5,
      yelpReview: true,
      useful: 0,
      funny: 0,
      cool: 0,
    },
  ],
})


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
review24 = Review.create( text: 'Firstly, the staff and drinks were great, no complaints there.  We shared the grilled octopus which was very nice, flavorful, and cooked well. Unfortunately our mains were very disappointing; gulf stripped bass, vegetarian pozole verde, and the shrimp "Sea of Cortez" were all very bland and unmemorable.', food_rating: 3, service_rating: 5, author_id: 12, business_id: 24)
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