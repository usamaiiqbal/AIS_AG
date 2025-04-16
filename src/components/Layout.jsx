import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="layout">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="layout__main">
        <Sidebar isOpen={isSidebarOpen} onLinkClick={closeSidebar} />{" "}
        <div className="layout__content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
