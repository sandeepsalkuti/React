import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu(resId);
  }, []);

  const fetchMenu = async (resId) => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResMenu(json.data);
  };
  return resMenu;
};

export default useRestaurantMenu;
