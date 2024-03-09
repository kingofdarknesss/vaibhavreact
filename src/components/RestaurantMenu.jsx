import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import  ResCategory  from "./ResCategory.jsx";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // console.log(itemCards);

  // const items=menu.map((foods) => {

  // })

  return (
    <div className="menu">
      <h1>
        {/* {
          resInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants?.name
        } */}
      </h1>

      <h2 className="text-blue-600">menu {resId}</h2>
      <h2 className="text-center font-bold my-10">{name}</h2>
      <h2 className="text-center">{cuisines.join("     ,")}</h2>
      <h2 className="text-center">{costForTwoMessage}</h2>

      {categories.map((category) => (
        <ResCategory data={category?.card?.card}/>
      ))}
    </div>
  );
};
export default RestaurantMenu;
