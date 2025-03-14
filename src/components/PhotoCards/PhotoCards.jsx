import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import "./PhotoCards.scss";
import { v4 as uuidv4 } from "uuid";

export default function PhotoCards({ displayedPhotos }) {
  return (
    <>
      {displayedPhotos.map((photo) => {
        return (
          <div className="photo-card" key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <div className="photo-card__img-container">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/images/${
                    photo.photo
                  }`}
                  alt={photo.photoDescription}
                  className="photo-card__img"
                />
                <div className="photo-card__photographer">
                  {photo.photographer}
                </div>
              </div>

              <div className="photo-card__footer">
                {photo.tags.map((tag) => {
                  return <Tag tag={tag} key={uuidv4()} />;
                })}
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
