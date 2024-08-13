import React, { useEffect } from "react";

function StyledButton({ children, onClick }) {
  useEffect(() => {
    console.log("styled section");
  }, []);

  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: "5px",
        border: "5px solid #7FA1C3",
        backgroundColor: "#7FA1C3",
        padding: "10px 20px",
        fontSize: "16px",
        color: "#E2DAD6",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}

export default StyledButton;
