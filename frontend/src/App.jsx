import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SingleBlog from "./pages/SingleBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<SingleBlog />} />
        <Route path="/nopage" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
