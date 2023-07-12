import { productApi } from "@/features/product/productApi";
import { productCategoryApi } from "@/features/product/productCategory";
import { serviceApi } from "@/features/service/serviceApi";
import { serviceDetailsApi } from "@/features/service/serviceDetailsApi";
import serviceDetailsSlice from "@/features/serviceDetails/serviceDetailsSlice";
import servicesSlice from "@/features/services/servicesSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  devTools: true,
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
    [serviceDetailsApi.reducerPath]: serviceDetailsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [productCategoryApi.reducerPath]: productCategoryApi.reducer,
    services: servicesSlice,
    serviceDetails: serviceDetailsSlice,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      serviceApi.middleware,
      serviceDetailsApi.middleware,
      productApi.middleware,
      productCategoryApi.middleware
    ),
});

export default store;
