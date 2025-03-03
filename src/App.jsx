import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./app.scss";
import "./styles/partials/_resets.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [tagDrawerOpen, setTagDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header
        tagDrawerOpen={tagDrawerOpen}
        setTagDrawerOpen={setTagDrawerOpen}
      />
      <Routes>
        <Route path="/" element={<HomePage tagDrawerOpen={tagDrawerOpen} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
