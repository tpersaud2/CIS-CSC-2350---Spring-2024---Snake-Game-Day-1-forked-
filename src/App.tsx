import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const snake1 = new Snake("green");
    snake1.move(3);
    display(snake1.position);
    snake1.move(2);
    display(snake1.position);
    snake1.turnLeft();
    snake1.move(1);
    display(snake1.position);
    snake1.turnRight();
    snake1.move(10);
    display(snake1.position);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
