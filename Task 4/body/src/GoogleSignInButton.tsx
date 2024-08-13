import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const GoogleComponent = () => {
  const { isAuthenticated, isLoading, loginWithPopup, logout, user } =
    useAuth0();

  useEffect(() => {
    const event = new CustomEvent("sign-in-event", {
      detail: { username: user?.name },
    });

    window.dispatchEvent(event);
  }, [isAuthenticated, user]);

  const handleGoogleSignIn = async () => {
    try {
      // @ts-ignore
      await loginWithPopup({ connection: "google-oauth2" });
      console.log(user?.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      // @ts-ignore
      await logout({ returnTo: window.location.origin });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {!isAuthenticated && (
        <button
          onClick={handleGoogleSignIn}
          style={{
            borderRadius: "5px",
            border: "5px solid #7FA1C3",
            backgroundColor: "#7FA1C3",
            padding: "10px 20px",
            fontSize: "16px",
            color: "#E2DAD6",
          }}
        >
          Sign in with Google
        </button>
      )}
      {isAuthenticated && user && (
        <>
          <h1>Hello, {user.name}</h1>
          <button
            onClick={handleLogOut}
            style={{
              borderRadius: "5px",
              border: "5px solid #7FA1C3",
              backgroundColor: "#7FA1C3",
              padding: "10px 20px",
              fontSize: "16px",
              color: "#E2DAD6",
            }}
          >
            Log out
          </button>
        </>
      )}
    </>
  );
};

export default GoogleComponent;
