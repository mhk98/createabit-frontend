const { default: axios } = require("axios");

let URL;

switch (process.env.REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "http://localhost:5000/api/v1/";
    break;
  case "PRODUCTION":
    URL = "https://productionserver.com/";
    break;
  default:
    URL: "http://localhost:5000/api/v1/";
}

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

export default instance;
