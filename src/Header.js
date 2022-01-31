import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div className="upperBar">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="navBar">
          <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
            <div onClick={handleAuth} className="navBar_Option">
              <span className="option_lineOne">
                Hello {user ? `${user.email}` : "Guest"}
              </span>
              <span className="option_lineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="navBar_Option">
            <span className="option_lineOne">Returns</span>
            <span className="option_lineTwo">& Order</span>
          </div>
          <div className="navBar_Option">
            <span className="option_lineOne">Your</span>
            <span className="option_lineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="navBar_Basket">
              <ShoppingBasketIcon />
              <div className="option_lineTwo basketIconCount ">
                {cart?.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bottomBar">
        <div className="bottomBar_all">
          <MenuIcon />
          <h4>All</h4>
        </div>
        <div className="bottomBar_extra">
          <spam>Today's Deals</spam>
          <spam>Customer Service</spam>
          <spam>Registry</spam>
          <spam>Gift Cards</spam>
          <spam>Sell</spam>
        </div>
      </div>
    </div>
  );
}

export default Header;
