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
      <main className="main-wrapper">
        <aside className="tag-drawer-container">
          <TagDrawer tags={Tags} />
        </aside>
        <section className="main-content-container">
          <Hero />
          <Gallery />
        </section>
      </main>
    </>
  );
}
