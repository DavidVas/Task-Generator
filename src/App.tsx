import Stack from "./Components/Stack";
import Task from "./Components/Task";

function App() {
  return (
    <div style={{background: "#5F7CC6", width: "100%", minWidth: "100vh", height: "100vh", minHeight: "100vh", padding: "16px" }}>
      <Stack>
        <Task name="first task" weight={4}/>
        <Task name="second task (which is a long task)" weight={2}/>
        <Task name="third task" weight={1}/>
      </Stack>
    </div>
  );
}

export default App;
