import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { RefContext } from "../contexts/RefContext";
import { HomeLoaders } from "../components/PropertiesLoaderSkeleton";

const Home = () => {
  //
  const { setCurrentPage } = useContext(RefContext);

  useEffect(() => {
    setCurrentPage("Homepage");
  }, []);

  //
  return (
    <>
      <Navbar />
      <section className="section home_section">
        <div className="properties_row">
          <HomeLoaders />
        </div>
      </section>
    </>
  );
};

export default Home;
