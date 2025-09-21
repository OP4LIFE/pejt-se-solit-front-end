import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    )
};

export default Header;