# Help Me Chews - Yelp Review clone

Home page sample
![project-snippet](https://github.com/sungyotkim/help-me-chews/blob/main/github_assets/snippet.PNG)
Search page sample
![project-snippet-2](https://github.com/sungyotkim/help-me-chews/blob/main/github_assets/snippet-2.PNG)

Want to see more?
## [Link to live version](https://help-me-chews.herokuapp.com/) 

## Technologies/APIs used
- React JS frontend
- HTML/CSS
- Ruby on Rails backend
- Yelp API
- Google Maps API

## Features
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

**One of the difficulties faced**
One of the hardest aspects of this project was connecting all of the different components that are nested under different components in order to perform the appropriate search function. The approach I took to solve it was to set up a context variable to allow access for all the components in different page renders to access the needed variables to perform the search. Since Yelp allows for multiple search queries with only location being required, I chose to include all terms possible in the project in each fetch call, passing in specific and appropriate "null" attributes if the user did not opt to search for a specific query. Though this made the code a bit verbose, it allowed for all the logic to be performed in one controller for the fetch request by checking to see which values were passed or not passed and submitting the request to the Yelp api as needed. Specific care was taken in the search requests to limit requests to the Yelp API as much as possible since the yelp requests are daily limited.

sample fetch request to the backend:
``` javascript
  const fetchBusinesses = async () => {
    let priceString = "null";
    if (price.length > 0) {
      priceString = price.join(", ");
    }
    const res = await fetch(
      `/search/businesses/${tempTerm}/${tempLocation}/${radius}/${priceString}/${openNow}/${genderNeutralBathrooms}/${wheelchairAccessible}/${limit}/${offset}/${hotAndNew}`
    );
    const newBusinesses = await res.json();
    setBusinessResults((businessResults) => ({
      ...businessResults,
      ...newBusinesses,
    }));
  };
```
Request handling in the backend:
``` ruby
  def get_businesses
    key = yelp_api_key_goes_here
    url = "https://api.yelp.com/v3/businesses/search?"
    if params[:term] != "null" then url += "term=#{params[:term]}&" end
    if params[:location] != "null" then url += "location=#{params[:location]}&" end
    if params[:radius] != "null" then url += "radius=#{params[:radius]}&" end
    if params[:price] != "null" then url += "price=#{params[:price]}&" end
    if params[:open_now] != "null" then url += "open_now=true&" end
    if params[:gender_neutral_bathrooms] != "null" then url += "attributes=gender_neutral_bathrooms&" end
    if params[:wheelchair_accessible] != "null" then url += "attributes=wheelchair_accessible&" end
    if params[:limit] != "null" then url += "limit=#{params[:limit]}&" end
    if params[:offset] != "null" then url += "offset=#{params[:offset]}&" end
    if params[:hot_and_new] != "null" then url += "attributes=hot_and_new&" end
    url[-1] = '' #remove the & from the last query
    response = HTTParty.get(url, headers: {"Authorization" => "Bearer #{key}"}).parsed_response
    render json: response
  end
```


## TODO's / Future Features
- Adding friends
- Messaging friends
- Followers
- Marking reviews useful/helpful/cool
- Personalizing user info
- Adding photos to reviews/users
