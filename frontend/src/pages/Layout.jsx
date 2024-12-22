import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Layout = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Outlet />
  </>
  );
};

export default Layout;
