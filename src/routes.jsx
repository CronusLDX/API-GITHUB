import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPages";
import RepositoriesPage from "./pages/MainPages/RepositoriesPages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/API-GITHUB" element={<MainPage />} />
      <Route path="/:login/repositories" element={<RepositoriesPage/>} />
    </Routes>
  );
}
