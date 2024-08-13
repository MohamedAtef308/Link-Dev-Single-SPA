import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children, onRedirectCallback }) => {
  const domain = "dev-li17hcmw0fde517g.us.auth0.com";
  const clientId = "EZMIf3J2Veen1x1ivijipXfexMS3zKEl";

  React.useEffect(() => {
    console.log("auth0 provider with history");
  }, []);

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
