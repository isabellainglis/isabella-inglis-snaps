import { useState } from "react";
import "./HomePage.scss";
import Gallery from "../../components/Gallery/Gallery";
import Tags from "../../data/tags.json";
import TagDrawer from "../../components/TagDrawer/TagDrawer";
import Hero from "../../components/Hero/Hero";
import Photos from "../../data/photos.json";

export default function HomePage({ tagDrawerOpen }) {
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
        <Hero />
        <Gallery displayedPhotos={filteredPhotos} />
      </section>
    </main>
  );
}
