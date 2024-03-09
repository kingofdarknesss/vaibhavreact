import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, sla, id } = resData?.info;
  // console.log(props);
  // const categories=resData?.info.
  return (
    <Link
      to={"/restaurants/" + id}
      className="rescard w-[200px] h-[300px] border border-black border-solid bg-gray-100
    object-fit cursor-pointer m-[5px] p-4 inline-block"
    >
      <img
        className="pho h-40 w-full"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h3 className="meg font-bold">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines}</h4>
      <h4>ETA {sla.deliveryTime} Minutes</h4>
    </Link>
  );
};

export const isOpenLabel = (ResCard) => {
  return (props) => {
    return(
    <div>
      <label className="grid">
        
        Is Open
      </label>
      <ResCard {...props} />
    </div>
    );
  };
};

export default ResCard;
