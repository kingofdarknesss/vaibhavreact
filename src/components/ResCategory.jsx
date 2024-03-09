import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (data) => {
  // console.log(data);
  // const {item}=data?.data?.itemCards
  const [showItems,setShowItems]=useState(false);
  const handleClick=()=>{
    setShowItems(!showItems);
  }
  return (
    <div>
      <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 my-4  ">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}>
          <span>
            {" "}
            {data.data.title} ({data.data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {showItems && <ItemList data={data?.data?.itemCards} />}
      </div>

      {/*body*/}
    </div>
  );
};
export default ResCategory;
