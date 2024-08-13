import React from "react";
import { BrowserRouter } from "react-router-dom";
import GoogleComponent from "./GoogleComponent";
import Auth0Component from "./Auth0Component";

export default function Root(props) {
  console.log("Mounted: " + props.name);

  return (
    <BrowserRouter>
      <Auth0Component>
        <GoogleComponent />
      </Auth0Component>
    </BrowserRouter>
  );
}
