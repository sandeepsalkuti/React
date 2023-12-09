import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import cardObj from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(cardObj);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState(cardObj);
  const onlineCheck = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
  };
  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }
  if (onlineCheck === false)
    return (
      <h1>
        Looks like you're offline!!.. Please check your internet connection.
      </h1>
    );
  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.data?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const resList = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4.5
            );
            console.log(resList);
            setListOfRestaurants(resList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              {restaurant.data.promoted ? (
                <RestaurantCardPromoted
                  resData={restaurant}
                ></RestaurantCardPromoted>
              ) : (
                <RestaurantCard resData={restaurant}></RestaurantCard>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
