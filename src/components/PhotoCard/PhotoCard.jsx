import Tag from "../Tag/Tag";
import "./PhotoCard.scss";
import { v4 as uuidv4 } from "uuid";

export default function PhotoCard({ displayedPhotos }) {
  return (
    <>
      {displayedPhotos.map((photo) => {
        return (
          <div className="photo-card" key={photo.id}>
            <div className="photo-card__img-container">
              <img
                src={photo.photo}
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
          </div>
        );
      })}
    </>
  );
}
