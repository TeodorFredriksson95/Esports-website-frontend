import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoPageFoundPage } from "./pages/NoPageFoundPage";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NoPageFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
