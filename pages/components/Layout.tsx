import React from "react";
import Nav from "./Nav";
import Footera from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Nav />
        <main>{children}</main>
      <Footera />
    </React.Fragment>
  );
};

export default Layout;
