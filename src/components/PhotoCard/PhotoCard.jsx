import Tag from "../Tag/Tag";
import "./PhotoCard.scss";

export default function PhotoCard() {
  return (
    <div className="photo-card">
      <div className="photo-card__img-container">
        <img
          src="https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-00.png"
          alt=""
          className="photo-card__img"
        />
        <div className="photo-card__footer">
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
}
