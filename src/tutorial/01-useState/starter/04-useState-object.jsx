import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(45);
  const [hobby, setHobby] = useState("tennis");
  const displayPerson = () => {
    setName("john");
    setAge(93);
    setHobby("reading book");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys to :{hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
