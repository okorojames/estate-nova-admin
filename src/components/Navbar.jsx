import { useContext } from "react";
import profile_icon from "../assets/images/profile-icon.png";
import { IoNotifications } from "react-icons/io5";
import { RefContext } from "../contexts/RefContext";
import { NavLink } from "react-router-dom";
import NavProfileDropDown from "./NavProfileDropDown";

const Navbar = () => {
  const { currentPage, nav_profile_drop_down } = useContext(RefContext);
  //
  const show_profile_drop = () => {
    nav_profile_drop_down.current.classList.toggle("show_profile_drop_down");
  };

  //
  return (
    <nav>
      <div className="nav_text_loader">{currentPage}</div>

      <div className="nav_icons">
        <div className="nav_notification">
          <IoNotifications className="nav_notify_icon" />
          <div className="nav_notify_indicator"></div>
        </div>
        {/*  */}
        <div className="nav_profile">
          <img src={profile_icon} alt="" onClick={show_profile_drop} />
          <NavProfileDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
