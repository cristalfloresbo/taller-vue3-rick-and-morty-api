import axios from "axios";

const urlCharacter = `${process.env.VUE_APP_URL_API}/character`;

export const getCharacters = (params) => {
  return axios
    .get(urlCharacter, { params })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getCharacters,
};
