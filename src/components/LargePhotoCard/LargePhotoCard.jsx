import { useEffect, useState } from "react";
import "./LargePhotoCard.scss";
import likeBtn from "../../assets/icons/Like_Outline.svg";
import Tag from "../Tag/Tag";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function LargePhotoCard({ id, API_KEY }) {
  const [singlePhoto, setSinglePhoto] = useState(null);

  const fetchSinglePhoto = async (id) => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=${API_KEY}`
      );

      setSinglePhoto(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchSinglePhoto(id);
  }, [id]);

  if (!singlePhoto) {
    return;
  }

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
        <div className="large-photo-card__info-container">
          <div className="large-photo-card__info-container-left">
            <div className="large-photo-card__likes">
              <img
                className="large-photo-card__like-btn"
                src={likeBtn}
                alt="Like button"
              />{" "}
              <div className="large-photo-card__like-count">
                {singlePhoto.likes} likes
              </div>
            </div>
            <p className="large-photo-card__photographer">
              Photo by {singlePhoto.photographer}
            </p>
          </div>
          <div className="large-photo-card__date">
            {new Date(singlePhoto.timestamp).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
