import axios from "axios";
import API_URL from "../env";

const petition = axios.create({
  baseURL: `${API_URL}products/`,
});

export default {
  post(product, headers) {
    return petition
      .post(`new`, product, { headers: headers })
      .then((response) => response)
      .catch((error) => console.log(error));
  },
};
