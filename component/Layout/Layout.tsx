import Navbar from "@component/Navbar/Navbar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the Footer</footer>
    </div>
  );
};

export default Layout;
