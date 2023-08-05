import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { RefContext } from "../contexts/RefContext";

const AddProperty = () => {
  //
  const { setCurrentPage } = useContext(RefContext);

  useEffect(() => {
    setCurrentPage("Add Property");
  }, []);

  //
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default AddProperty;
