import { useEffect, useState } from "react";
import PhotoCards from "../PhotoCards/PhotoCards";
import axios from "axios";
import "./Gallery.scss";
import loader from "../../assets/icons/loader.gif";

export default function Gallery({ activeTag, error, setError }) {
  const [photos, setPhotos] = useState(null);

  const fetchPhotosData = async () => {
    setError(false);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/photos`
      );

      setPhotos(data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotosData();
  }, []);

  if (error) {
    return (
      <h2 className="error-msg">
        Unable to load photos. Please try again shortly
      </h2>
    );
  }

  if (!photos) {
    return <img className="loading" src={loader} alt="Spinning loader" />;
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
