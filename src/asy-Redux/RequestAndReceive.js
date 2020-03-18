import axios from "./node_modules/axios";
import * as consetVriable from "../ConsetVriable";

function postRequest() {
  return {
    type: consetVriable.postRequest,
  };
}

function postReceive(json) {
  return {
    type: actionsType.postReceive,
    items: json,
    receivedDate: Date.now(),
  };
}

export function Post() {
  return function(dispatch) {
    dispatch(postRequest()); 
    const axiosConfiguration = {
      withCredentials: true,
    };
    return axios
      .get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists")
      .then(rep => {
        dispatch(postReceive(rep.data));
      })
      .catch(err => {
        console.log("An error occurred.", err);
      });
  };
} 