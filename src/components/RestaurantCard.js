import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.data;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="card-logo"
        alt="card-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{deliveryTime} MINS</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promoted">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
