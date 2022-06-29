import Axios from "axios";

const Api = Axios.create({ baseURL: "https://esp8266control.herokuapp.com/" });

export default Api;
