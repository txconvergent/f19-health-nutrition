import axios from "axios";

const YELP_API_KEY =
  "GEtJ0tSq7ZBLvTdBx9-tzVdmqnfSeu5G5phkpkM7TG5kOJh63SJRamIKVuIquCO-aHbYO-vb737PtSr8iI6Cv0GQYmQl5oqOpen8Pznl5mMrR1-hwxbRcIvHN0fCXXYx";

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
