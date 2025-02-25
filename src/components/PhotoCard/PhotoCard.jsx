import Tag from "../Tag/Tag";
import "./PhotoCard.scss";

export default function PhotoCard() {
  return (
    <div className="photo-card">
      <div className="photo-card__img-container">
        <img src="" alt="" className="photo-card__img" />
        <div className="photo-card__footer">
          <Tag />
        </div>
      </div>
    </div>
  );
}
