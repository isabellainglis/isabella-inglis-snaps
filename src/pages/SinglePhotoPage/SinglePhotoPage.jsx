import "./SinglePhotoPage.scss";
import LargePhotoCard from "../../components/LargePhotoCard/LargePhotoCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../../components/Comments/Comments";

export default function SinglePhotoPage({ API_KEY }) {
  const [comments, setComments] = useState(null);
  const [formFields, setFormFields] = useState({
    name: "",
    comment: "",
  });

  const { id } = useParams();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=${API_KEY}`
      );
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (!comments) {
    return;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=${API_KEY}`,
        formFields
      );
    } catch (error) {
      console.log(error);
    }

    fetchComments();
  };

  return (
    <div className="single-photo-page">
      <LargePhotoCard id={id} API_KEY={API_KEY} />
      <form
        className="single-photo-page__comments-form"
        onSubmit={handleFormSubmit}
      >
        <label>
          Name
          <input
            className="comments-form__input"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Comment
          <input
            className="comments-form__input"
            type="text"
            name="comment"
            onChange={handleInputChange}
          />
        </label>
        <button className="comments-form__submit-btn">Submit</button>
      </form>
      <Comments comments={comments} />
    </div>
  );
}
