import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "ashish",
    age: 21,
  };

  let myArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-md mb-4">
        Tailwind CSS
      </h1>
      <Card username="chaiaurcode" btnText="Click Me" />
      <Card username="ashish"  />
    </>
  );
}

export default App;
