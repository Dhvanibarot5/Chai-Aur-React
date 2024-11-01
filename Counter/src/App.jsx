import { useState } from "react";
import "./App.css";
import Counter from "../components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
