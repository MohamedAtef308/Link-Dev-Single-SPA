import GoogleSignInButton from "./GoogleSignInButton";
import Auth0ProviderWithHistory from "./Auth0ProviderWithHistory";
import { BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#6482AD",
            height: "70vh",
          }}
        >
          <h2>body</h2>
          <GoogleSignInButton />
        </section>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}
