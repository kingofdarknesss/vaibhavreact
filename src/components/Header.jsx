import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux'



const Header = () => {
  const [btnName, setBtn] = useState("Login");
  useEffect(() => {
    console.log("useffect called");
  }, [btnName]);
  const cartItems=useSelector((store)=>store.cart.items)

  return (
    <div className="header flex justify-between border border-black border-solid">
      <div className="logo-container">
        <img className="logo w-{10px} h-[200px]" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items flex px-0 py-[0px]">
        <ul className="uli flex p-10 text-[24px]">
          <Link to={"/"}>
            <li className="lis cursor-pointer p-10">home</li>
          </Link>
          <Link to={"/about"}>
            <li className="lis cursor-pointer p-10">About Us</li>
          </Link>

          <li className="lis p-10">Contact Us</li>
          <Link to={"/cart"}>
            <li className="lis p-10">Cart -({cartItems.length})Items </li>
          </Link>
          <button
            className="p-[10px] border border-black border-solid"
            onClick={() => {
              btnName === "Login" ? setBtn("Log Out") : setBtn("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
