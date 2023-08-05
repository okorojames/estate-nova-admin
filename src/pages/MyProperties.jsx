import React, { useContext, useEffect } from "react";
import { RefContext } from "../contexts/RefContext";
import Navbar from "../components/Navbar";

const MyProperties = () => {
  //
  const { setCurrentPage } = useContext(RefContext);

  useEffect(() => {
    setCurrentPage("My Properties");
  }, []);
  //
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default MyProperties;
