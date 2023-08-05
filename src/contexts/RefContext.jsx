import { createContext, useRef, useState } from "react";

export const RefContext = createContext();

const RefContextProvider = ({ children }) => {
  const side_bar_drop_down_links = useRef();
  const side_bar_builder_link = useRef();
  const nav_profile_drop_down = useRef();
  const [currentPage, setCurrentPage] = useState();

  //

  return (
    <RefContext.Provider
      value={{
        side_bar_drop_down_links,
        side_bar_builder_link,
        nav_profile_drop_down,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefContextProvider;
