import { useContext, useEffect } from "react";
import { RefContext } from "../../contexts/RefContext";
import { useLocation } from "react-router-dom";

export const GetToTop = () => {
  const { pathname } = useLocation();

  // getting the pathname of the current page and making the first letter UpperCase and using it as a title
  const title_last_letter = pathname.slice(2);
  const title_first_letter = pathname.slice(1).charAt(0).toLocaleUpperCase();
  const title = title_first_letter + title_last_letter;

  // references from useContext
  const { side_bar_builder_link, side_bar_drop_down_links } =
    useContext(RefContext);

  //
  useEffect(() => {
    // change title to site name if pathname is "/" else title should be page path name
    if (pathname === "/") {
      document.title = "Estate Nova";
    } else {
      document.title = `Estate Nova - ${title}`;
    }

    // styling sidebar drop down based on path change
    if (pathname === "/my-sites" || pathname === "/new-site") {
      side_bar_drop_down_links.current.classList.add("show_side_bar_links");
      side_bar_builder_link.current.style.color = "#15aabf";
    } else if (pathname !== "/my-sites" || pathname !== "/new-site") {
      side_bar_drop_down_links.current.classList.remove("show_side_bar_links");
      side_bar_builder_link.current.style.color = "#f8f9fa";
    }

    // scroll to top on path name change
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
