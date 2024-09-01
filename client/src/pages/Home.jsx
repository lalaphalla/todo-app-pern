import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TaskForm />
      <TaskList />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
