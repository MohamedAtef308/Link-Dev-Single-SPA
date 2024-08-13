import { useState } from "react";

export default function Root(props) {
  const [number, setNumber] = useState(0);
  console.log("reactAbout mounted:", props.name);

  return (
    <section>
      <h2>testing states and variables</h2>
      <p>local state with useState</p>
      <h3>{number}</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increment
      </button>
      <p>global state</p>
    </section>
  );
}
