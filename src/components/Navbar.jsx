import { useContext } from "react";
import profile_icon from "../assets/images/profile-icon.png";
import { IoNotifications } from "react-icons/io5";
import { RefContext } from "../contexts/RefContext";
import { NavLink } from "react-router-dom";
import NavProfileDropDown from "./NavProfileDropDown";
import NavNotificationDropDown from "./NavNotificationDropDown";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const {
    currentPage,
    nav_profile_drop_down,
    nav_notification_drop_down,
    side_nav_box,
    side_nav_bar_overlay,
  } = useContext(RefContext);
  //
  const show_profile_drop = () => {
    nav_profile_drop_down.current.classList.toggle("show_profile_drop_down");
  };

  //
  const show_notification_drop_down = () => {
    nav_notification_drop_down.current.classList.toggle(
      "show_nav_notification_drop_down"
    );
  };

  //
  const handle_show_side_nav_box = () => {
    side_nav_box.current.classList.toggle("show_side_nav_box");
    side_nav_bar_overlay.current.classList.add("show_side_bar_nav_overlay");
  };

  //
  return (
    <nav>
      <HiMiniBars3BottomLeft
        className="nav_side_bar_bars"
        onClick={handle_show_side_nav_box}
      />
      <div className="nav_text_loader">{currentPage}</div>

      <div className="nav_icons">
        <div className="nav_notification_wrap">
          <div onClick={show_notification_drop_down}>
            <IoNotifications className="nav_notify_icon" />
            <div className="nav_notify_indicator"></div>
          </div>
          <NavNotificationDropDown />
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
