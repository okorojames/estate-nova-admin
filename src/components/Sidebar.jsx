import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiFillHome, AiFillPieChart, AiFillSetting } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { GoReport } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="side_nav_container">
      <div className="side_nav_logo">
        <img src={logo} alt="side nav logo" />
      </div>
      {/*  */}
      <div className="side_nav_links">
        <NavLink className="nav_link">
          <AiFillHome className="nav_link_icon" />
          Home
        </NavLink>
        <div className="nav_link nav_link_drop_down">
          <div>
            <ImUserTie className="nav_link_icon" />
            Builder <FaChevronDown className="nav_link_icon chevron" />
          </div>
          <div className="sidebar_drop_down_links">
            <NavLink className="nav_link">My Sites</NavLink>
            <NavLink className="nav_link">New Site</NavLink>
          </div>
        </div>
        <NavLink className="nav_link">
          <FiMonitor className="nav_link_icon" />
          Marketing
        </NavLink>
        <NavLink className="nav_link">
          <AiFillPieChart className="nav_link_icon" />
          Sales
        </NavLink>
      </div>
      {/*  */}
      <div className="sidebar_footer_links">
        <NavLink className="nav_link">
          <GoReport className="nav_link_icon" />
          Get Help
        </NavLink>
        <NavLink className="nav_link">
          <AiFillSetting className="nav_link_icon" />
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
