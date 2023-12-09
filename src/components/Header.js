import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Heading = () => {
  const [btnContent, setBtnContent] = useState("Login");
  const onlineCheck = useOnlineStatus();
  const dummy = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus: {onlineCheck ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnContent === "Login"
                ? setBtnContent("Logout")
                : setBtnContent("Login");
            }}
          >
            {btnContent}
          </button>
          <li>{dummy.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
