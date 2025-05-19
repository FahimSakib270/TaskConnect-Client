import React from "react";
import { Outlet } from "react-router";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className=" min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:16 xl:24">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
