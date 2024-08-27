import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "", description: "" };

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      const data = action.payload;
      const submitData = async () => {
        console.log(data);
        const res = await fetch("http://localhost:3000/api/v1/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!res.ok) console.log("Error");
      };
      submitData();
    },
    async getAllTask(state) {
      // const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/v1/tasks");
      const resData = await res.json();
      console.log("get all tasks");
      state = resData.data.tasks;
      // };
      // fetchData()
      console.log(state);
    },
  },
});
export const tasksActions = taskSlice.actions;
export default taskSlice.reducer;
