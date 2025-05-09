import "./SinglePhotoPage.scss";
import LargePhotoCard from "../../components/LargePhotoCard/LargePhotoCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../../components/Comments/Comments";
import loader from "../../assets/icons/loader.gif";

export default function SinglePhotoPage({ error, setError }) {
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
        `${import.meta.env.VITE_API_BASE_URL}/photos/${id}/comments`
      );

      const sortedData = data.sort(
        (comment1, comment2) => comment2.timestamp - comment1.timestamp
      );

      setComments(sortedData);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (error) {
    return (
      <h2 className="error-msg">Unable to load. Please try again shortly.</h2>
    );
  }

  if (!comments) {
    return <img className="loading" src={loader} alt="Spinning loader" />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const comment = e.target.comment.value;

    if (name.length < 1 && comment.length < 1) {
      setIsNameValid(false);
      setIsCommentValid(false);
      setErrorMessage("Please fill out all comment fields");
      return;
    } else if (comment.length < 1) {
      setIsCommentValid(false);
      setIsNameValid(true);
      setErrorMessage("Please fill out comment field");
      return;
    } else if (name.length < 1) {
      setIsNameValid(false);
      setIsCommentValid(true);
      setErrorMessage("Please fill out name field");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/photos/${id}/comments`,
        formFields
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }

    e.target.name.value = "";
    e.target.comment.value = "";

    setFormFields({
      name: "",
      comment: "",
    });
    fetchComments();
    setIsNameValid(true);
    setIsCommentValid(true);
    setErrorMessage("");
  };

  return (
    <div className="single-photo-page">
      <LargePhotoCard id={id} error={error} setError={setError} />
      <div>
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
                !isCommentValid
                  ? "single-photo-page__form-input-comment--error"
                  : ""
              }`}
              type="text"
              name="comment"
              onChange={handleInputChange}
            />
          </label>
          <button className="single-photo-page__submit-btn">Submit</button>
          {errorMessage ? errorMessage : ""}
        </form>
      </div>
      <Comments comments={comments} />
    </div>
  );
}
