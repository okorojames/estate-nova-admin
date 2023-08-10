import { createContext, useRef, useState } from "react";

export const RefContext = createContext();

const RefContextProvider = ({ children }) => {
  const side_bar_drop_down_links = useRef();
  const side_bar_builder_link = useRef();
  const nav_profile_drop_down = useRef();
  const nav_notification_drop_down = useRef();
  const side_nav_bar_overlay = useRef();
  const side_nav_box = useRef();
  const [currentPage, setCurrentPage] = useState();

  //

  return (
    <RefContext.Provider
      value={{
        side_bar_drop_down_links,
        side_bar_builder_link,
        nav_profile_drop_down,
        nav_notification_drop_down,
        side_nav_bar_overlay,
        side_nav_box,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefContextProvider;
