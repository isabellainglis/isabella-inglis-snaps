import PhotoCards from "../PhotoCards/PhotoCards";
import "./Gallery.scss";

export default function Gallery({ displayedPhotos }) {
  return (
    <section className="gallery">
      <PhotoCards displayedPhotos={displayedPhotos} />
    </section>
  );
}
