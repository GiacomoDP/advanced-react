import { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState());
  //const value = useState("hello")[0];
  //console.log(value);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>you clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
