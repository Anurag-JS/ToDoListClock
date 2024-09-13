import "./styles.css";
import Greet from "./Components/Greet/Greet";
import Clock from "./Components/Clock/Clock";
import ToDoList from "./Components/ToDoList/ToDoList";

export default function App() {
  return (
    <div className="App">
      <Greet />
      <Clock />
      <ToDoList />
    </div>
  );
}
