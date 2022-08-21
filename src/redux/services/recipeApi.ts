import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const YOUR_APP_KEY = "f77677604f950263fc7eb35f4d66e111";
const YOUR_APP_ID = "cbc6acf1";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.edamam.com/" }),
  endpoints: (builder) => ({
    getRecipes: builder.mutation({
      query: ({ query, health }) => {
        return {
          url: `search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${health}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetRecipesMutation } = recipeApi;
