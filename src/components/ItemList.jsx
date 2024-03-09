import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({data}) => {

  const dispatch=useDispatch()
  const handleAddItems= (items)=>{
    dispatch(addItem(items))
    console.log(items)
  }
  
  return (
    <div>
      {data?.map((items) => (
        <div className="p-2 m-2 border border-black border-b-2 ">
          <button className="m-2 p-2 bg-black text-white justify-end" onClick={()=>handleAddItems(items)}>Add+</button>
          <div key={items?.card?.info?.id}>
            <div className="text-black pt-14">{items?.card?.info?.name}</div>
          </div>
          <p className="text-xs">{items?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
