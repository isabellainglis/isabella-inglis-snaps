import "./LargePhotoCard.scss";
import Tag from "../Tag/Tag";
import { v4 as uuidv4 } from "uuid";

export default function LargePhotoCard({ singlePhoto }) {
  return (
    <div className="large-photo-card" key={singlePhoto.id}>
      <div className="large-photo-card__img-container">
        <img
          src={singlePhoto.photo}
          alt={singlePhoto.photoDescription}
          className="large-photo-card__img"
        />
      </div>

      <div className="large-photo-card__footer">
        {singlePhoto.tags.map((tag) => {
          return <Tag tag={tag} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
}
