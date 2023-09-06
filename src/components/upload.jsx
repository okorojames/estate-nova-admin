import axios from "axios";

//
export const uploadToCloudninary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "sqab6rmt");
  const { data } = axios.post(
    `https://api.cloudinary.com/v1_1/dcwpjyezj/image/upload`,
    formData
  );
  return { publicId: data?.public_id, url: data?.secure_url };
};
