import { useState, useEffect } from "react";

export default function Root() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const handleDataReceive = (event) => {
      setUsername(event.detail.username);
    };

    window.addEventListener("sign-in-event", handleDataReceive);

    return () => {
      window.removeEventListener("sign-in-event", handleDataReceive);
    };
  }, []);

  return (
    <section
      style={{
        textAlign: "center",
        backgroundColor: "#7FA1C3",
        height: "10vh",
      }}
    >
      <h2>Header</h2>
      {username && <h3>Welcome, {username}</h3>}
    </section>
  );
}
