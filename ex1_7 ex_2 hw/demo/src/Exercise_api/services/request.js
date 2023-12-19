import axios from "axios";

const request = () => {
  const getAvatar = () => {
    return axios
      .get("https://api.sampleapis.com/avatar/info/")
      .then((res) => res.data);
  };
  return {
    getAvatar,
  };
};

export default request;
