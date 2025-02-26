import { useState } from "react";
import "./app.scss";
import "./styles/partials/_resets.scss";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Tags from "./data/tags.json";
import TagDrawer from "./components/TagDrawer/TagDrawer";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Header />
      <TagDrawer tags={Tags} />
      <Hero />
      <Gallery />
    </>
  );
}
