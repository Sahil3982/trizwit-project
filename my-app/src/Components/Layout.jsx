// components/Layout.js

import React from "react";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main/>
      <main>{children}</main>
   </div>
  );
};

export default Layout;
