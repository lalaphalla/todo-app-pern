import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tasksApi } from "../apis/taskApi";
import taskReduer from "./task";

const store = configureStore({
  reducer: { task: taskReduer, [tasksApi.reducerPath]: tasksApi.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(tasksApi.middleware);
  },
});

console.log(store);
setupListeners(store.dispatch);
export default store;
export { useFetchTasksQuery, useAddTaskMutation } from "../apis/taskApi";
