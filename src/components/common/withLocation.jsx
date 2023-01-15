import React from "react";
import { Location } from "@reach/router";

// Based on https://medium.com/@chrisfitkin/how-to-get-query-string-parameter-values-in-gatsby-f714161104f

/* Explicitly use property spreading for higher-order component (a component wrapping another component). */
/* eslint-disable react/jsx-props-no-spreading */
function withLocation(ComponentToWrap) {
  /* eslint-disable func-names */
  return function (props) {
    return (
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
  };
}

export default withLocation;
