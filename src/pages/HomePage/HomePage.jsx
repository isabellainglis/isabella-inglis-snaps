import "./HomePage.scss";
import Gallery from "../../components/Gallery/Gallery";
import TagDrawer from "../../components/TagDrawer/TagDrawer";
import Hero from "../../components/Hero/Hero";
import { useState } from "react";

export default function HomePage({ tagDrawerOpen, error, setError }) {
  const [activeTag, setActiveTag] = useState("");

  setError(false);

  const handleTagClick = (selectedTag) => {
    activeTag !== selectedTag ? setActiveTag(selectedTag) : setActiveTag("");
  };

  return (
    <main className="main-wrapper">
      {tagDrawerOpen && (
        <aside className="tag-drawer-container">
          <TagDrawer
            activeTag={activeTag}
            handleTagClick={handleTagClick}
            error={error}
            setError={setError}
          />
        </aside>
      )}
      <section className="main-content-container">
        <Hero />
        <Gallery activeTag={activeTag} error={error} setError={setError} />
      </section>
    </main>
  );
}
