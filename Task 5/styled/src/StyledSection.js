import React, { useEffect } from "react";

function StyledSection({ children }) {
  useEffect(() => {
    console.log("styled section");
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6482AD",
        height: "100vh",
      }}
    >
      {children}
    </section>
  );
}

export default StyledSection;
