# Help Me Chews - Yelp Review clone

![project-snippet]([https://github.com/sungyotkim/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/blob/main/github-assets/projectDemo.gif](https://github.com/sungyotkim/help-me-chews/blob/main/github_assets/snippet.PNG))

## [Link to live version](https://help-me-chews.herokuapp.com/) 

## Technologies/APIs used
- React JS frontend
- HTML/CSS
- Ruby on Rails backend
- Yelp API
- Google Maps API

##Features
- Full searching functionality of businesses in the yelp database
- CRUD reviews for businesses, added simulated blue stars to separate food and service ratings
- User profiles/personalization

## Development
**Fetching from yelp database while simultaneously saving into the rails database for businesses**
One of the pitfalls of using yelp's database was the inability to create and add user's reviews to the business page of the business itself. In order to work around this, I first saved the businesses' key information including name, photo and the yelpId (to track the business via yelpId on subsequent fetches) and then directed user review creation to the rails backend business page instead. This allows for users to create, edit, and destroy reviews for a given website. 

Upon fetching business info from the Yelp database
```javascript
  useEffect(() => {
    let firstPhoto = currentYelpBusiness.photos[0];
    let name = currentYelpBusiness.name;
    let businessToMake = {
      yelpId: yelpId,
      photo: firstPhoto,
      name: name,
    };
    dispatch(createBusiness(businessToMake));
  }, [yelpId]);
  
  ...
  export const createBusiness = (business) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/`, {
      method: "POST",
      body: JSON.stringify(business),
    });
    const data = await res.json();
    dispatch(setBusiness(data));
    return data;
  };
```
Which would then be directed to the rails backend controller that fetches the business if already made or creates it instead.
``` ruby
 def create
      @business = Business.find_by_yelp_id(params[:business][:yelp_id])
      if @business
        @reviews = @business.reviews
        render :show
      else
        @business = Business.create(business_params)
        render :show
      end
  end
```

```javascript

```

## TODO's / Future Features
- Adding friends
- Messaging friends
- Followers
- Marking reviews useful/helpful/cool
- Personalizing user info
- Adding photos to reviews/users
