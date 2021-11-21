import axios from "axios";
import { API } from "./constant";

export default function getRacingData() {
  return axios.get(API);
}
