import { useState } from "react";
import AddTask from "./Components/AddTask";
import Button from "./Components/Button";
import Stack from "./Components/Stack";
import Task, { TaskModel } from "./Components/Task";
import Tile from "./Components/Tile";

function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [selectedTask, setSelectedTask] = useState<TaskModel>();

  const addTaskFunction = (name: string) => {
    setTasks(oldTasks => [...oldTasks, { name: name, weight: 1 }, { name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 }, { name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },{ name: name, weight: 1 },])
  };

  const selectRandomTask = () => {
    const selectedIndex = Math.floor(Math.random() * tasks.length);
    setSelectedTask(tasks[selectedIndex]);
  }

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Stack orientation="horizontal">
        
        <div style={{ boxSizing: "border-box", padding: "20px", height: "100vh", maxWidth: "300px", overflowY: "scroll" }}>
          <Stack>
            <Stack gridGap="8px">
              {tasks.map((task) => <Task name={task.name} weight={task.weight} />)}
            </Stack>
            <AddTask addTask={addTaskFunction} />
          </Stack>
        </div>

        <Stack>
          <Button onClick={selectRandomTask} size={"60px"} />
          {selectedTask &&
            <Tile>
              {selectedTask?.name}
            </Tile>}
        </Stack>

      </Stack>
    </div>
  );
}

export default App;
