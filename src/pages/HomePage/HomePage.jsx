import { useState, useEffect } from "react";
import "./HomePage.scss";
import Gallery from "../../components/Gallery/Gallery";
import Tags from "../../data/tags.json";
import TagDrawer from "../../components/TagDrawer/TagDrawer";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
const API_KEY = "cff359d9-80fb-42e0-b9c9-1e1f641007f4";

export default function HomePage({ tagDrawerOpen }) {
  const [activeTag, setActiveTag] = useState("");
  const [displayedPhotos, setDisplayedPhotos] = useState(null);
  const [photos, setPhotos] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${API_KEY}`
      );
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!photos) {
    return;
  }

  const handleTagClick = (tag) => {
    activeTag !== tag ? setActiveTag(tag) : setActiveTag("");

    setDisplayedPhotos(filteredPhotos);
  };

  const filteredPhotos = photos.filter((photo) => {
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
