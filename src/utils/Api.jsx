import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "in",
  },
  headers: {
    "X-RapidAPI-Key": "6a42b79c08msha6243efef7889a4p1b0eefjsne2c76a30d966",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
