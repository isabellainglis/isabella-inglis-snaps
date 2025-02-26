import PhotoCard from "../PhotoCard/PhotoCard";
import "./Gallery.scss";
import Photos from "../../data/photos.json";

export default function Gallery() {
  return (
    <section className="gallery">
      <PhotoCard photos={Photos} />
    </section>
  );
}
