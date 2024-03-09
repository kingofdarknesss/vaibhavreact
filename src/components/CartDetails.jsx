import { useSelector } from "react-redux";

import ItemList from "./ItemList";

const CartDetails =()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
     
    if (cartItems===null){
        return;
    }
    console.log("he")
    return (

     <div>
        <ItemList data={cartItems}/>
     </div>
        
      
    );
    }
export default CartDetails;
