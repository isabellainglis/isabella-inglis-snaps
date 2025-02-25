import { useState } from "react";
import "./app.scss";
import "./styles/partials/_resets.scss";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

export default function App() {
  return (
    <>
      <Header />
      <Gallery />
    </>
  );
}
