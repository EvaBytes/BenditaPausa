import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import {Home} from "./pages/Home/Home.jsx";
import { PrivacyPolicy } from "./pages/Home/PrivacyPolicy.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="politica-privacidad" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
};

export { App };

