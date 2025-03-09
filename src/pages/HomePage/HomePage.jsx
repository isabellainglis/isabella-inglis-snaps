import "./HomePage.scss";
import Gallery from "../../components/Gallery/Gallery";
import TagDrawer from "../../components/TagDrawer/TagDrawer";
import Hero from "../../components/Hero/Hero";
import { useState } from "react";

export default function HomePage({ tagDrawerOpen, API_KEY }) {
  const [activeTag, setActiveTag] = useState("");

  const handleTagClick = (selectedTag) => {
    activeTag !== selectedTag ? setActiveTag(selectedTag) : setActiveTag("");
  };

  return (
    <main className="main-wrapper">
      {tagDrawerOpen && (
        <aside className="tag-drawer-container">
          <TagDrawer
            API_KEY={API_KEY}
            activeTag={activeTag}
            handleTagClick={handleTagClick}
          />
        </aside>
      )}
      <section className="main-content-container">
        <Hero />
        <Gallery API_KEY={API_KEY} activeTag={activeTag} />
      </section>
    </main>
  );
}
