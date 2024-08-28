import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const authsApi = createApi({
  reducerPath: "auths",
  baseQuery: fetchBaseQuery({
    // baseUrl: "api/v1",
    baseUrl: "http://localhost:3000/api/v1",
    
  }),
  endpoints(builder) {
    return {
      login: builder.mutation({ 
        query: (user) => {
          return {
            url: "/users/login",
            method: "POST",
            body: {
              ...user
            },
            credentials: "include"
          };
        },
      }), 
    };
  },
});
// useFetchTasksQuery auto generate hook from fetchTasks
export const { useLoginMutation } = authsApi;
export { authsApi };