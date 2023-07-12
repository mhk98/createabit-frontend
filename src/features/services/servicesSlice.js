import { fetchServices } from "./servicesAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  services: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getServices = createAsyncThunk("services/getService", async () => {
  const services = fetchServices();
  return services;
});

const servicesSlice = createSlice({
  name: "Services",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state, action) => {
        state.isLoading = true;
        state.isError = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.isLoading = false;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.services = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
