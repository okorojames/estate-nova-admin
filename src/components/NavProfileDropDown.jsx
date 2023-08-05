import { useContext } from "react";
import { RefContext } from "../contexts/RefContext";
import { NavLink } from "react-router-dom";

const NavProfileDropDown = () => {
  //
  const { nav_profile_drop_down } = useContext(RefContext);

  //
  return (
    <div className="nav_profile_drop" ref={nav_profile_drop_down}>
      <div className="nav_drop_header">
        <h4>Jamex Tech</h4>
        <p>jamextech@gmail.com</p>
      </div>

      <div className="nav_profile_drop_links">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>

      <div className="nav_drop_logout">
        <NavLink>Logout</NavLink>
      </div>
    </div>
  );
};

export default NavProfileDropDown;
