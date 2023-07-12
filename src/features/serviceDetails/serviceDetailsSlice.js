const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  serviceDetails: [],
};

const serviceDetailsSlice = createSlice({
  name: "ServiceDetails",
  initialState,
  reducers: {},
});

export default serviceDetailsSlice.reducer;
