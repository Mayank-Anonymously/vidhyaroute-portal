import {
  ADD_NEW_CONTENT,
  ADD_NEW_HUB,
  ADD_NEW_SERVICE,
  ADD_NEW_UNI,
  GET_ALL_CONTENT,
  GET_ALL_HUB,
  GET_ALL_QUERIES,
  baseURL,
} from "Components/helpers/url_helper";
import axios from "axios";
import Swal from "sweetalert2";
import { api_is_success } from "./reducer";

export const GetAllQueries = () => async (dispatch: any) => {
  try {
    const data = {
      url: `${baseURL}${GET_ALL_QUERIES}`,
      method: "GET",
    };
    const fetchapi = await axios.request(data);
    const resp: any = await fetchapi;

    const { baseResponse, response } = resp;

    if (baseResponse.status === 1) {
      dispatch(api_is_success(response));
    }
  } catch (error: any) {
    Swal.fire({
      title: "Error occured",
      text: error,
      icon: "error",
    });
  }
};
