import "../styles/style.scss";

import React from "react";

import { CookiePolicy } from "../components/CookiePolicy";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="body-wrap boxed-container">
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
      <CookiePolicy />
    </div>
  );
};

export default Layout;
