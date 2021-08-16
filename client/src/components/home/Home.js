import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Route } from "react-router-dom";

function Home(props) {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
          </>
        );
      }}
    />
  );
}

export default Home;
