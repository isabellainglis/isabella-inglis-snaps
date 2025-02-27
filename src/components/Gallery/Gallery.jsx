import PhotoCard from "../PhotoCard/PhotoCard";
import "./Gallery.scss";

export default function Gallery({ displayedPhotos }) {
  return (
    <section className="gallery">
      <PhotoCard displayedPhotos={displayedPhotos} />
    </section>
  );
}
