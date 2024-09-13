import "./styles.css";
import Greet from "./Components/Greet/Greet";
import Clock from "./Components/Clock/Clock";

export default function App() {
  return (
    <div className="App">
      <Greet />
      <Clock />
    </div>
  );
}
