import { useState, useEffect } from "react";
import { store } from "../../root/store/globalStore";

export default function Root(props) {
  console.log("Mounted: " + props.name);
  const [value, setValue] = useState(0);

  // Using custom events
  useEffect(() => {
    const handleDataReceive = (event) => {
      setValue(event.detail.counter);
    };

    window.addEventListener("counter-event", handleDataReceive);
  }, []);

  // Using store
  // DOESN'T WORK
   useEffect(() => {
  store.subscribe(() => {
    console.log("subscribed");
    setValue(store.getState().counter);
  });
   }, []);

  return (
    <section>
      <h2>{value}</h2>
    </section>
  );
}
