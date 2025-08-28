import React from 'react';
import { Outlet } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {ReturnTop} from "./components/ReturnTop";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ReturnTop />
    </>
  );
};
