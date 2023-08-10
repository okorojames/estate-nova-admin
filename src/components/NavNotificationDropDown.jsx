import { MdOutlineNotificationAdd } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useContext } from "react";
import { RefContext } from "../contexts/RefContext";

const NavNotificationDropDown = () => {
  const { nav_notification_drop_down } = useContext(RefContext);

  //
  return (
    <div
      className="nav_notification_container"
      ref={nav_notification_drop_down}
    >
      <div className="nav_notification_header">
        <h2>Notifications</h2>
        <p>You have 6 notifications</p>
      </div>

      <div className="nav_notification_body">
        <NavStaticNotifications />
      </div>
    </div>
  );
};

export default NavNotificationDropDown;

// 8 static notifications

export const NavStaticNotifications = () => {
  return (
    <>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="nav_notification">
        <MdOutlineNotificationAdd className="nav_notification_icon" />
        <div className="nav_notification_details">
          <h5>Your post has been sent!</h5>
          <p>you just sent a post and it has been submitted</p>
          <div className="nav_notification_times">
            <AiOutlineClockCircle />
            <p>6 hours ago</p>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};
