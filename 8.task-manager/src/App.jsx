import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskFrom";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    const trimmed = title.trim();
    if (!trimmed) return;

    setTasks((prev) => [
      { id: crypto.randomUUID(), title: trimmed, done: false },
      ...prev,
    ]);
  }

  return (
    <div style={{ padding: 20 }}>
      <Header title="Mini Task Manager" />

      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />

      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}
