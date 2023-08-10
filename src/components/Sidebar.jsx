import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiFillHome, AiFillPieChart, AiFillSetting } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { GoReport } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";
import { useContext } from "react";
import { RefContext } from "../contexts/RefContext";

const Sidebar = () => {
  //
  const {
    side_bar_builder_link,
    side_bar_drop_down_links,
    side_nav_box,
    side_nav_bar_overlay,
  } = useContext(RefContext);

  const show_side_bar_drop_down = () => {
    side_bar_drop_down_links.current.classList.toggle("show_side_bar_links");
  };

  //
  const handle_close_side_nav_bar = () => {
    side_nav_box.current.classList.remove("show_side_nav_box");
    side_nav_bar_overlay.current.classList.remove("show_side_bar_nav_overlay");
  };

  //
  return (
    <div className="side_nav_container" ref={side_nav_box}>
      <div className="side_nav_logo">
        <img src={logo} alt="side nav logo" />
      </div>
      {/*  */}
      <div className="side_nav_links">
        <NavLink to="/" className="nav_link">
          <AiFillHome className="nav_link_icon" />
          Home
        </NavLink>
        <div className="nav_link_drop_down" ref={side_bar_drop_down_links}>
          <div onClick={show_side_bar_drop_down} ref={side_bar_builder_link}>
            <ImUserTie className="nav_link_icon" />
            Builder <FaChevronDown className="nav_link_icon chevron" />
          </div>
          <div className="sidebar_drop_down_links">
            <div className="side_bar_drop_down_links_space"></div>
            <NavLink to="/my-sites" className="nav_link">
              My Sites
            </NavLink>
            <NavLink to="/new-site" className="nav_link">
              New Site
            </NavLink>
          </div>
        </div>
        <NavLink to="/marketing" className="nav_link">
          <FiMonitor className="nav_link_icon" />
          Marketing
        </NavLink>
        <NavLink to="/sales" className="nav_link">
          <AiFillPieChart className="nav_link_icon" />
          Sales
        </NavLink>
      </div>
      {/*  */}
      <div className="sidebar_footer_links">
        <NavLink to="/get-help" className="nav_link">
          <GoReport className="nav_link_icon" />
          Get Help
        </NavLink>
        <NavLink className="nav_link">
          <AiFillSetting className="nav_link_icon" />
          Settings
        </NavLink>
      </div>
      <div
        className="side_nav_overlay"
        ref={side_nav_bar_overlay}
        onClick={handle_close_side_nav_bar}
      ></div>
    </div>
  );
};

export default Sidebar;
