import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
 type AppState = {
   returnTo?: string;
   [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
 };

const Auth0ProviderWithHistory = ({ children }: { children: JSX.Element }) => {
  const domain = "dev-li17hcmw0fde517g.us.auth0.com";
  const clientId = "EZMIf3J2Veen1x1ivijipXfexMS3zKEl";

  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
