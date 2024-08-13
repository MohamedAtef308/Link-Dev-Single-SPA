import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const GoogleComponent = () => {
  const { isAuthenticated, isLoading, loginWithPopup, logout, user } =
    useAuth0();

  const handleGoogleSignIn = async () => {
    try {
      await loginWithPopup({ connection: "google-oauth2" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      console.log(window.location.origin);
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
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}
      {isAuthenticated && (
        <>
          <h1>Hello, {user.name}</h1>
          <button onClick={handleLogOut}>Log out</button>
        </>
      )}
    </>
  );
};

export default GoogleComponent;
