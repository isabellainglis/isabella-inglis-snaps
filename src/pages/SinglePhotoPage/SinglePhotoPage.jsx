import "./SinglePhotoPage.scss";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import LargePhotoCard from "../../components/LargePhotoCard/LargePhotoCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SinglePhotoPage({ API_KEY }) {
  const [singlePhoto, setSinglePhoto] = useState(null);

  const { id } = useParams();

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
    <div className="single-photo-page">
      <LargePhotoCard singlePhoto={singlePhoto} />
      <form className="single-photo-page__comments-form">
        <label>
          Name
          <input className="comments-form__input" type="text" name="name" />
        </label>
        <label>
          Comment
          <input className="comments-form__input" type="text" name="comment" />
        </label>
        <button className="comments-form__submit-btn">Submit</button>
      </form>
      <div className="single-photo-page__comments"></div>
    </div>
  );
}
