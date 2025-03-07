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
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=${API_KEY}`
      );

      const sortedData = data.sort(
        (comment1, comment2) => comment2.timestamp - comment1.timestamp
      );

      setComments(sortedData);
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

    const name = e.target.name.value;
    const comment = e.target.comment.value;

    if (name.length < 1) {
      setIsNameValid(false);
      setErrorMessage("Please fill out your name");
    }

    if (comment.length < 1) {
      setIsCommentValid(false);
      setErrorMessage("Please fill out the comment field");
      return;
    }

    try {
      await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=${API_KEY}`,
        formFields
      );
    } catch (error) {
      console.log(error);
    }

    setFormFields("");
    fetchComments();
    setIsNameValid(true);
    setIsCommentValid(true);
    setErrorMessage("");
  };

  return (
    <div className="single-photo-page">
      <LargePhotoCard id={id} API_KEY={API_KEY} />
      <form
        className="single-photo-page__comments-form"
        onSubmit={handleFormSubmit}
      >
        <label className="single-photo-page__form-label">
          Name
          <input
            className={`single-photo-page__form-input ${
              !isNameValid ? "single-photo-page__form-input--error" : ""
            }`}
            type="text"
            name="name"
            onChange={handleInputChange}
          />
        </label>
        <label className="single-photo-page__form-label">
          Comment
          <textarea
            className={`single-photo-page__form-input-comment ${
              !isCommentValid ? "single-photo-page__form-input--error" : ""
            }`}
            type="text"
            name="comment"
            onChange={handleInputChange}
          />
        </label>
        <button className="single-photo-page__submit-btn">Submit</button>
      </form>
      <Comments comments={comments} />
    </div>
  );
}
