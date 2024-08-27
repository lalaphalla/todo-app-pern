export const fetchAllTask = async (setState) => {
    const res = await fetch("http://localhost:3000/api/v1/tasks");
    const resData = await res.json();
    setState(resData.data.tasks);
  };