import {
  ADD_NEW_CONTENT,
  ADD_NEW_COUNTRY,
  ADD_NEW_HUB,
  ADD_NEW_UNI,
  GET_ALL_CONTENT,
  GET_ALL_COUNTRY,
  GET_ALL_HUB,
  baseURL,
} from "Components/helpers/url_helper";
import axios from "axios";
import Swal from "sweetalert2";
import { api_is_success } from "./reducer";

export const AddNewCNT = (values: any) => async (dispatch: any) => {
  try {
    const data = {
      url: `${baseURL}${ADD_NEW_COUNTRY}`,
      method: "POST",
      data: {
      title: values.title,
      meta_title: values.meta_title,                 // required
      meta_keywords: values.meta_keywords,           // required
      meta_description: values.meta_description,     // required
      category: values.category,                     // required
      page_url: values.page_url,                     // required
      page_image_tag: values.page_image_tag,         // required
      page_content: values.page_content,             // required
    },
    };
    const fetchapi = await axios.request(data);
    const resp: any = await fetchapi;

    const { baseResponse, response } = resp;
    if (baseResponse.status === 1) {
      Swal.fire({
        title: "Success",
        text: baseResponse.message,
        icon: "success",
      });
    }
  } catch (error: any) {
    Swal.fire({
      title: "Error occured",
      text: error,
      icon: "error",
    });
  }
};

export const GettAllCNT = () => async (dispatch: any) => {
  try {
    const data = {
      url: `${baseURL}${GET_ALL_COUNTRY}`,
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
