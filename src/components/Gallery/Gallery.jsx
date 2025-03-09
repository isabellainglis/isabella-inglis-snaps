import { useEffect, useState } from "react";
import PhotoCards from "../PhotoCards/PhotoCards";
import axios from "axios";
import "./Gallery.scss";

export default function Gallery({ API_KEY, activeTag }) {
  const [photos, setPhotos] = useState(null);

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

  useEffect(() => {
    fetchPhotosData();
  }, []);

  if (!photos) {
    return <p className="loading">Loading...</p>;
  }

  const filteredPhotos = photos.filter((photo) => {
    if (!activeTag) {
      return photo;
    } else {
      return photo.tags.includes(activeTag);
    }
  });

  return (
    <section className="gallery">
      <PhotoCards displayedPhotos={filteredPhotos} />
    </section>
  );
}
