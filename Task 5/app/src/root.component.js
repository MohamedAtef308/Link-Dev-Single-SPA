import { StyledSection } from "@link/styles";
import { Auth0ProviderWithHistory, SignInWithGoogle } from "@link/utilities";
import { BrowserRouter } from "react-router-dom";
import { StyledButton } from "@link/styles";
import {EX} from "@link/exportTest";

export default function Root() {

  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
  };

  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory onRedirectCallback={onRedirectCallback}>
        <StyledSection>
          <h1>Finally</h1>
            <SignInWithGoogle Button={StyledButton} />
            <EX/>
        </StyledSection>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}
