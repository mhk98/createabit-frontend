import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCategoryApi = createApi({
  reducerPath: "productCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://createabit-backend.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getProductCategoryApi: builder.query({
      query: (id) => `/productCategory/allproduct/${id}`,
    }),
  }),
});

export const { useGetProductCategoryApiQuery } = productCategoryApi;
