import { useState } from "react";
import AddTask from "./Components/AddTask";
import Stack from "./Components/Stack";
import Task, { TaskModel } from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  return (
    <div style={{background: "#010E2D", width: "100%", minWidth: "100vh", height: "100vh", minHeight: "100vh", padding: "16px" }}>
      <Stack>
        {tasks.map((task) => <Task name={task.name} weight={task.weight}/>)}
        <AddTask addTask={(name: string) => {
            setTasks(oldTasks => [...oldTasks, {name: name, weight: 1}])
          }}/>
      </Stack>
    </div>
  );
}

export default App;
