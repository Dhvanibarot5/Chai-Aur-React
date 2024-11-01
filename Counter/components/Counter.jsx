import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log("count", count);

  const decrement = () => {
    console.log("hello");
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex">
      <button onClick={() => decrement()}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}
