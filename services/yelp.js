import axios from "axios";

const YELP_API_KEY =
  "4ryrDjkVEgKqtzuw-L5jdANL_2FUZ_H7Sj4V72wk58zgoyhIUsE_DOrwnUD9OtMGdHI4Sy8vdAbxGZx565xg6rAgRqqS81Togkkwr_I3Pizsr8ejoEvQwxyErFrDXXYx";

export const getRestaurants = userLocation => {
  return (
    // get data according to parameters?
    axios
      .get("https://api.yelp.com/v3/businesses/search", {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`
        },
        params: {
          categories: "restaurants",
          ...userLocation
        }
      })
      // return an array with the restaurants saved? (not sure)
      .then(res =>
        res.data.businesses.map(business => {
          return {
            name: business.name,
            coords: business.coordinates
          };
        })
      )
      .catch(error => console.error(error))
  );
};

export default {
  getRestaurants
};
