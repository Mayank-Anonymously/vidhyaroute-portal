import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  error: <any>"",
  queriesData: <any>[],
  selectedcontent: <any>[],
};

const query = createSlice({
  name: "query",
  initialState,
  reducers: {
    api_is_loading(state, action) {
      state.isloading = action.payload;
      state.error = "";
      state.queriesData = [];
    },
    api_is_error(state, action) {
      state.isloading = false;
      state.error = action.payload;
      state.queriesData = [];
    },
    api_is_success(state, action) {
      state.isloading = false;
      state.error = "";
      state.queriesData = action.payload;
    },
    is_selected_success(state, action) {
      state.isloading = false;
      state.error = "";
      state.selectedcontent = action.payload;
    },
  },
});

export const {
  api_is_loading,   
  api_is_error,
  api_is_success,
  is_selected_success,
} = query.actions;

export default query.reducer;
          