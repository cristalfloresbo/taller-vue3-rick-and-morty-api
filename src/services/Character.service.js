import axios from "axios";

const urlCharacter = `${process.env.VUE_APP_URL_API}/character`

export const getCharacters = () => {
    return axios.get(urlCharacter)
    .then(res => {
        console.log(res.data);
        return res.data.results;
    })
    .catch(err => {
        console.log(err);
    })
}

export default {
    getCharacters
}