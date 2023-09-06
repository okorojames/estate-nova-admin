import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BiUpload } from "react-icons/bi";
import { RefContext } from "../contexts/RefContext";
import preview_1 from "../assets/images/profile-icon.png";
import preview_2 from "../assets/images/logo2.png";
import preview_3 from "../assets/images/profile-icon.png";
import { uploadToCloudninary } from "../components/upload";

const AddProperty = () => {
  // ENV VARIABLES
  const Cloud_Name = import.meta.env.VITE_CLOUD_NAME;
  const Upload_Preset = import.meta.env.VITE_UPLOAD_PRESET;

  //
  const { setCurrentPage } = useContext(RefContext);

  useEffect(() => {
    setCurrentPage("Add Property");
  }, []);

  // states
  const [images, setImages] = useState([]);
  const [allimage, setAllimage] = useState([]);

  //
  // const { publicId } = uploadToCloudninary();
  // console.log(publicId);
  // send to cloudinary function
  const handleSelectImgChange = async (e) => {
    e.preventDefault();
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadToCloudninary(images[i]);
        arr.push(data);
        console.log(arr);
      }
      setAllimage(arr);
    } catch (err) {
      console.log(err);
    }
  };

  //
  return (
    <>
      <Navbar />
      <div className="section add_property_section">
        <form className="property_input_form" onSubmit={handleSelectImgChange}>
          {/*  */}
          <div className="property_img_input_div">
            <label
              htmlFor="property_img_input"
              className="property_img_input_label"
            >
              <BiUpload className="property_img_upload_icon" />
              <div>Upload property images here...</div>
            </label>
            <input
              type="file"
              multiple
              accept="images/*"
              id="property_img_input"
              onChange={(e) => setImages(e.target.files)}
            />
          </div>
          <div className="property_details_inputs">
            <input type="text" placeholder="Property Name" />
            <input type="text" placeholder="Property Price" />
            <textarea
              rows="10"
              placeholder="Property description here..."
            ></textarea>
            <input
              className="property_rating_input"
              type="text"
              placeholder="property ratings"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
