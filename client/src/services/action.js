import { API_URL } from "../utils/constants";

export const fetchAllTask = async () => {
  const response = await fetch(`${API_URL}tasks`).then((res) => res.json());
  return response;
};

export const fetchTaskById = async (id) => {
  const response = await fetch(`${API_URL}tasks/${id}`).then((res) =>
    res.json()
  );
  return response;
};
