import { store, ACTION_TYPES } from "../../root/store/globalStore";

export default function Root(props) {
  console.log("Mounted: "+props.name);

  let value = 0;

  // Using custom events
  const sendData1 = () => {
    const event = new CustomEvent("counter-event", { detail: { counter: value } });
    window.dispatchEvent(event);
  };

  // Using store
  const sendData2 = () => {
    store.dispatch({type: ACTION_TYPES.GET_DATA, payload: value});
  }

  return (
    <section>
      <button
        onClick={() => {
          value++;
          sendData1();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          value--;
          sendData2();
        }}
      >
        Decrement
      </button>
    </section>
  );
}
