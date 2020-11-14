import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../contextAPI/StateProvider";
import { auth } from "../Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="AMAZON LOGO"
        />
      </Link>
      <div className="header__searchArea">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__headerLinks">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__options">
            <span className="header__optionsFirstLine">
              Hello {user && user.email}
            </span>
            <span className="header__optionsSecondLine">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsFirstLine">Returns</span>
            <span className="header__optionsSecondLine">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsFirstLine">Your</span>
            <span className="header__optionsSecondLine">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionsBasket">
            <ShoppingBasketIcon />
            <span className="header__optionsSecondLine header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

{
  /* logo on the left img
              search box
              links 3 - 
              basket number of items*/
}
