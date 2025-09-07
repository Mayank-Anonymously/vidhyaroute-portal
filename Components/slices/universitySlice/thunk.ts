import {
  ADD_NEW_CONTENT,
  ADD_NEW_HUB,
  ADD_NEW_UNI,
  GET_ALL_CONTENT,
  GET_ALL_HUB,
  baseURL,
} from "Components/helpers/url_helper";
import axios from "axios";
import Swal from "sweetalert2";
import { api_is_success } from "./reducer";

export const AddNewUNI = (values: any) => async (dispatch: any) => {

  // try {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("meta_title", values.meta_title);
    formData.append("meta_keywords", values.meta_keywords);
    formData.append("meta_description", values.meta_description);
    formData.append("category", values.category);
    formData.append("page_url", values.page_url);
    formData.append("page_image_tag", values.page_image_tag);
    formData.append("page_content", values.page_content);
    formData.append("file",  values.image);


    const resp: any = await axios.post(`${baseURL}${ADD_NEW_UNI}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
console.log("resp")
    const { baseResponse } = resp;
    if (baseResponse.status === 1) {
      Swal.fire({
        title: "Success",
        text: baseResponse.message,
        icon: "success",
      });
    }
  // } catch (error: any) {
  //   Swal.fire({
  //     title: "Error occured",
  //     text: error.message || error,
  //     icon: "error",
  //   });
  // }
};


export const GettAllUNI = () => async (dispatch: any) => {
  try {
    const data = {
      url: `${baseURL}${GET_ALL_CONTENT}`,
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
