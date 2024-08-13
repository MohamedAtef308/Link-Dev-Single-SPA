import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignInWithGoogle = ({Button}) => {
  const { isAuthenticated, isLoading, loginWithPopup, logout, user } =
    useAuth0();

  const handleGoogleSignIn = async () => {
    try {
      await loginWithPopup({ connection: "google-oauth2" });
      console.log(user?.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
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
        <Button
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
      )}
      {isAuthenticated && user && (
        <>
          <h1>Hello, {user.name}</h1>
          <Button
            onClick={handleLogOut}
          >
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default SignInWithGoogle;
