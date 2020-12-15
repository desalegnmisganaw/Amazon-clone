import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
    const [{ basket, user}, dispatch] = useStateValue();
   
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <nav className="header">
        <Link to="/">
        <img className="header-logo" 
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
        alt=""
        />
        </Link>
        <div className="header_search">
        <input type="text" className="header_searchInput" />  
        <SearchIcon className="header_searchIcon"  />
        </div>
        <div className="header-nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
  <span className="header_optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                    <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In" }</span>

                </div>
            </Link>
            <Link to="/orders">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">&Orders</span>

                </div>
            </Link>
            <Link to="/checkout">
                <div className="header_option">
                    <span className="header_optionLineOne">Yours</span>
                    <span className="header_optionLineTwo">Prime</span>

                </div>
            </Link>
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">{basket.length}</span>

                </div>
            </Link>

        </div>

      
    </nav>
  );
}

export default Header;
