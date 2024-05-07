import { useState } from "react";
import "./App.css";

function App() {
  // can give any name in counter and setCounter
  let [counter, setCounter] = useState(5);

  // let counter = 5;
  const addValue = () => {
    // ----------------------
    //here in console number is inscreasing but in website it is not updating(ui updation not happening)
    // console.log("Clicked", counter);
    // -----------------------
    // counter = counter + 1;
    // setCounter(counter);
    // ---------------
    // Interview ques 
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // ---------------
    // -----------------------
    // or setCounter(counter + 1)
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
