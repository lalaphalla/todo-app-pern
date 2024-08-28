import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tasksApi } from "../apis/taskApi";
import taskReduer from "./task";
import { authsApi } from "../apis/userApi";

const store = configureStore({
  reducer: {
    task: taskReduer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [authsApi.reducerPath]: authsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      tasksApi.middleware,
      authsApi.middleware
    );
  },
});

console.log(store);
setupListeners(store.dispatch);
export default store;
export { useFetchTasksQuery, useAddTaskMutation } from "../apis/taskApi";
export { useLoginMutation } from "../apis/userApi";
