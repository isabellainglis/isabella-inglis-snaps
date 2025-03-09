import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./app.scss";
import "./styles/partials/_resets.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SinglePhotoPage from "./pages/SinglePhotoPage/SinglePhotoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  const API_KEY = "cff359d9-80fb-42e0-b9c9-1e1f641007f4";
  const [tagDrawerOpen, setTagDrawerOpen] = useState(false);
  const [error, setError] = useState(null);

  return (
    <BrowserRouter>
      <Header
        tagDrawerOpen={tagDrawerOpen}
        setTagDrawerOpen={setTagDrawerOpen}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              tagDrawerOpen={tagDrawerOpen}
              error={error}
              setError={setError}
            />
          }
        />
        <Route
          path="/photos/:id"
          element={
            <SinglePhotoPage
              API_KEY={API_KEY}
              error={error}
              setError={setError}
            />
          }
        />
        <Route path="/*" element={<NotFoundPage API_KEY={API_KEY} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
