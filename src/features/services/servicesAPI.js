import instance from "@/utils/axios.config";

export const fetchServices = async () => {
  const data = await instance.get("/service");

  return data.data.data;
};
