import React from "react";
import { Location } from "@reach/router";
import queryString from "query-string";

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
          search={location.search ? queryString.parse(location.search, {arrayFormat: 'comma'}) : {}}
        />
      )}
    </Location>
  );

export default withLocation;
