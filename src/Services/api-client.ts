import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5dce68219b5640f4a8d008a88f331d3f",
  },
});
