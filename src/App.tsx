import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Button from "./Components/Button";
import Stack from "./Components/Stack";
import Task, { TaskData } from "./Components/Task";
import { getDataList, setData } from "./StorageUtils";

function App() {
  const [tasks, setTasks] = useState<TaskData[]>(
    getDataList("tasks")
  );
  const [selectedTask, setSelectedTask] = useState<Number>();
  const [deleteMode, setDeleteMode] = useState<boolean>(false);


  const onTaskChange = (index: number) => {
    return (newValue: TaskData) => setTasks(() => {
      return tasks.map((oldValue, i) => { if (index === i) return newValue; return oldValue });
    });
  };

  const addTaskFunction = (name: string) => {
    setTasks(oldTasks => [...oldTasks, { name: name, weight: 1 }])
  };

  const onDeleteTask = (index: number) => {
    return () => {
      setTasks((tasks) => tasks.filter((value, i) => i !== index));
      setSelectedTask(() => undefined);
    }
  };

  const selectRandomTask = () => {
    const accumulatedArray = calculateAccumulatedArray();
    const maxValue = accumulatedArray[accumulatedArray.length - 1];
    const selectedValue = Math.floor(Math.random() * maxValue + 1);

    let selectedIndex = 0;

    for (let index = 0; index < accumulatedArray.length - 1; index++) {
      if (accumulatedArray[index] < selectedValue && selectedValue <= accumulatedArray[index + 1]) {
        selectedIndex = index;
      }
    }

    setSelectedTask(() => selectedIndex);
  }

  const calculateAccumulatedArray = () => {
    let array: number[] = [0];
    tasks.map((task) => task.weight).reduce((accumulator, currentWeight) => {
      console.log(accumulator);
      const currentTotal = accumulator + currentWeight;
      array = array.concat(currentTotal);
      return currentTotal;
    }, 0);
    return array;
  }

  useEffect(() => {
    setData("tasks", tasks);
  }, [tasks]);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Stack orientation="horizontal">

        <div style={{ boxSizing: "border-box", padding: "20px", height: "100vh", maxWidth: "320px", overflowY: "scroll" }}>
          <Stack>
            <Stack gridGap="8px">
              {tasks.map((task, index) => <Task taskData={{name: task.name, weight: task.weight}} isSelected={index === selectedTask} onTaskChange={onTaskChange(index)} deleteMode={deleteMode} onDelete={onDeleteTask(index)} />)}
            </Stack>
            <AddTask addTask={addTaskFunction} />
          </Stack>
        </div>

        <Stack>
          <Button onClick={selectRandomTask} size={"60px"} text={"Select random task"}/>
          <Button onClick={() => setDeleteMode((mode) => !mode)} size={"60px"} text={"Delete tasks"}/>
        </Stack>

      </Stack>
    </div>
  );
}

export default App;
