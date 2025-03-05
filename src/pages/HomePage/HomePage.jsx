import { useState, useEffect } from "react";
import "./HomePage.scss";
import Gallery from "../../components/Gallery/Gallery";
import TagDrawer from "../../components/TagDrawer/TagDrawer";
import Hero from "../../components/Hero/Hero";
import axios from "axios";

export default function HomePage({ tagDrawerOpen, API_KEY }) {
  const [activeTag, setActiveTag] = useState("");
  const [photos, setPhotos] = useState(null);
  const [tags, setTags] = useState(null);
  const [displayedPhotos, setDisplayedPhotos] = useState(null);

  const fetchPhotosData = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${API_KEY}`
      );

      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTagsData = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=${API_KEY}`
      );

      setTags(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotosData();
    fetchTagsData();
  }, []);

  if (!photos || !tags) {
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
            tags={tags}
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
