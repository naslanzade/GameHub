import axios from 'axios';


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: "3fa63fd70cd24eefa55b13f3007e3c04",
    },
  });