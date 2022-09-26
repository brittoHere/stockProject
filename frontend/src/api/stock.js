import axios from "axios";
const apiUrl = "https://stockprojecthere.herokuapp.com/api/stock";

export function getStocks() {
  return axios.get(apiUrl);
}
