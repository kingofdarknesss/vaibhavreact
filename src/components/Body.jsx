import ResCard from "./RestaurantCard";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

import { isOpenLabel } from "./RestaurantCard";

const Body = () => {
  //local sate variable
  const [resMock, setRes] = useState([]);
  const [resM, setResM] = useState([]);
  const [srchdata, setSrchData] = useState("");
  const searchName = useRef(null);
  const ResCardOpen = isOpenLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResM(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  
  // if(resMock.length===0){
  //   return <Shimmer />
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>offline</h1>;

  return resMock.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter p-[10px]">
        <button
          className="filter-btn m-[10px] cursor-pointer bg-gray-300 border border-black border-solid"
          onClick={() => {
            const filteredList = resMock.filter(
              (res) => res.info.avgRating > 4.2
            );
            setRes(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="allres rounded-xl p-2  bg-indigo-600 text-white  border border-black border-solid m-[10px]"
          onClick={() => {
            setRes(resM);
          }}
        >
          All Restaurant
        </button>
        <input
          value={srchdata}
          ref={searchName}
          onChange={() => setSrchData(searchName.current.value)}
          className="p-2  bg-[royalblue] text-white m-[10px]"
          type="text"
          placeholder="Search"
        />
        <button
          className="serf border border-black border-solid p-[10px]"
          onClick={() => {
            setRes(resM);
            const serList = resM.filter((res) =>
              res.info.name.toLowerCase().includes(srchdata.toLowerCase())
            );
            setRes(serList);
          }}
        >
          search
        </button>
      </div>
      <div className=" flex flex-wrap">
        {resMock.map((restaurant) =>
          restaurant.info.isOpen ? (
            <ResCardOpen resData={restaurant} />
          ) : (
            <ResCard resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};
export default Body;
