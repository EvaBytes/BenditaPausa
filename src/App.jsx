import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import {Home} from "./pages/Home/Home.jsx";
import { PrivacyPolicy } from "./pages/Privacy/PrivacyPolicy.jsx";
import { Workshops } from "./pages/About/Workshops.jsx";
import { Community } from "./pages/About/Community.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="comunidad" element={<Community />} />
        <Route path="talleres" element={<Workshops />} />
      </Route>
    </Routes>
  );
};

export { App };

