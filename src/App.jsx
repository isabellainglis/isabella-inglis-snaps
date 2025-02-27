import { useState } from "react";
import "./app.scss";
import "./styles/partials/_resets.scss";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Tags from "./data/tags.json";
import Photos from "./data/photos.json";
import TagDrawer from "./components/TagDrawer/TagDrawer";
import Hero from "./components/Hero/Hero";

export default function App() {
  const [tagDrawerOpen, setTagDrawerOpen] = useState(false);
  const [activeTag, setActiveTag] = useState("");
  const [displayedPhotos, setDisplayedPhotos] = useState(Photos);

  const handleTagClick = (tag) => {
    activeTag !== tag ? setActiveTag(tag) : setActiveTag("");

    setDisplayedPhotos(filteredPhotos);
  };

  const filteredPhotos = Photos.filter((photo) => {
    if (!activeTag) {
      return photo;
    } else {
      return photo.tags.includes(activeTag);
    }
  });

  return (
    <>
      <Header
        tagDrawerOpen={tagDrawerOpen}
        setTagDrawerOpen={setTagDrawerOpen}
      />
      <main className="main-wrapper">
        {tagDrawerOpen && (
          <aside className="tag-drawer-container">
            <TagDrawer
              tags={Tags}
              activeTag={activeTag}
              handleTagClick={handleTagClick}
            />
          </aside>
        )}
        <section className="main-content-container">
          <div className="left-wrapper">
            <Hero />
            <Gallery displayedPhotos={filteredPhotos} />
          </div>
        </section>
      </main>
    </>
  );
}
