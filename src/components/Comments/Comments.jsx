import { useEffect, useState } from "react";
import "./Comment.scss";
import axios from "axios";

export default function Comments({ id, API_KEY }) {
  const [comments, setComments] = useState(null);

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

  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <div className="comments__comment-container" key={comment.id}>
            <div className="comments__comment-info-wrapper">
              <div className="comments__comment-name">{comment.name}</div>
              <div className="comments__comment-date">{comment.timestamp}</div>
            </div>
            <div className="comments__comment">{comment.comment}</div>
          </div>
        );
      })}
    </div>
  );
}
