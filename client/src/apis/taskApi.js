import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const tasksApi = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    // baseUrl: "api/v1",
    baseUrl: "http://localhost:3000/api/v1",
  }),
  endpoints(builder) {
    return {
      addTask: builder.mutation({
        invalidatesTags: ['Task'],
        query: (task) => {
          return {
            url: "/tasks",
            method: "POST",
            body: {
              ...task
            },
          };
        },
      }),
      fetchTasks: builder.query({
        providesTags: ['Task'],
        query: () => {
          return {
            url: "/tasks",
            method: "GET",
          };
        },
      }),
    };
  },
});
// useFetchTasksQuery auto generate hook from fetchTasks
export const { useFetchTasksQuery, useAddTaskMutation } = tasksApi;
export { tasksApi };
