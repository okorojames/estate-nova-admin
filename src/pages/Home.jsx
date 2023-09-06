import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { RefContext } from "../contexts/RefContext";
import { HomeLoaders } from "../components/PropertiesLoaderSkeleton";
import Properties from "../components/Properties";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  //
  const { setCurrentPage } = useContext(RefContext);

  useEffect(() => {
    setCurrentPage("Homepage");
  }, []);

  //
  const { data: properties, isLoading } = useQuery(["property_query"], () => {
    return axios.get(
      `https://glamorous-gray-pinafore.cyclic.cloud/api/properties/property/get-properties?limit=12&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRmOTM1NThlZWQ1MzBkNmY3ZTdhYiIsImlhdCI6MTY5Mzc2NTYxOCwiZXhwIjoxNjk2MzU3NjE4fQ.3ZrtPPwTFgU5_TQDPQ6Er-V1PTUe3sx8e8wWZ6gkSBg",
        },
      }
    );
  });

  //
  return (
    <>
      <Navbar />
      <section className="section home_section">
        <div className="properties_row">
          {isLoading && <HomeLoaders />}
          {properties && <Properties properties={properties.data} />}
        </div>
      </section>
    </>
  );
};

export default Home;
