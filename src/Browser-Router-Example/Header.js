import { NavLink } from "react-router-dom";
function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      |{" "}
      <NavLink to="/about" exact activeStyle={activeStyle}>
        About
      </NavLink>{" "}
      |
      <NavLink to="/contacts" activeStyle={activeStyle} exact>
        Contacts
      </NavLink>
    </nav>
  );
}
export default Header;
