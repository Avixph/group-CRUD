import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Homes</NavLink>
      <NavLink to="/car-brands">Brands</NavLink>
      <NavLink to="/add-car-brand-or-model">Add Brand/Model</NavLink>
    </nav>
  );
};

export default Nav;
