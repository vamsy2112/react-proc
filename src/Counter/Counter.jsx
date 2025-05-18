import { useState, useEffect } from "react"; //hooks

const Counter = () => {
  const [count, setCount] = useState(0); //state is a variable

  // will always be called on initial render
  useEffect(() => {
    console.log("useEffect called", "mini");
    // api call code goes here...
  }, [count]); // count is called as dependency

  const incrementHandler = () => {
    setCount(count + 1); //updating the state; DONOT update your state directly, instead call the setState method
  };

  const resetHandler = () => {
    // count = 0     // dont update your state directly
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
