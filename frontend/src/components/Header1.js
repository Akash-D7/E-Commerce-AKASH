import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header1({ cartItems }) {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to="/">
            <img width="150px" src="./images/Akash_logo.png" alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to="/cart" className="no-underline"><button id="but">
          <span id="cart" className="ml-3">
            <i className="fa-solid fa-cart-shopping" style={{ fontSize: '25px'}}></i>
          </span>
          <span className="ml-3" id="cart_count" style={{ fontSize: '18px' }}>{cartItems.length}</span></button>
        </Link>
      </div>
    </nav>
  );
}
