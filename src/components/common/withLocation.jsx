import React from "react";
import { Location } from "@reach/router";

// Based on https://medium.com/@chrisfitkin/how-to-get-query-string-parameter-values-in-gatsby-f714161104f

/* eslint-disable react/jsx-props-no-spreading - explicitly use property spreading for higher-order component (a component wrapping another component) */
const withLocation = (ComponentToWrap) => (props) =>
  (
    <Location>
      {({ location, navigate }) => (
        <ComponentToWrap
          {...props}
          location={location}
          navigate={navigate}
          searchParams={new URLSearchParams(location.search ?? "")}
        />
      )}
    </Location>
  );

export default withLocation;
