import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "configs/rtkQuery";
import { HomeModelData } from "models/HomeData";
import { HYDRATE } from "next-redux-wrapper";

const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery,
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getHomeData: builder.query<HomeModelData, string>({
      query: () => ({
        url: "/home.json",
        method: "GET",
      }),
    }),
  }),
});

export default homeApi;

export const { getHomeData } = homeApi.endpoints;
export const { useGetHomeDataQuery } = homeApi;
