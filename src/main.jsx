import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import DetailView from "./routes/DetailView";
import BreweryDetail from "./components/BreweryDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route path="/BreweryDetails/:breweryId" element={<BreweryDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
