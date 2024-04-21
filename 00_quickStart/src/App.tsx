import { useState } from "react";
import MyButton from "./components/Profile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton count={count} setCount={setCount} />
      <MyButton count={count} setCount={setCount} />
    </>
  );
}

export default App;
