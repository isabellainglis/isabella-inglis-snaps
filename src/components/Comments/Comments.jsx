import "./Comment.scss";

export default function Comments({ comments }) {
  return (
    <div className="comments">
      <div className="comments__counter">
        {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
      </div>
      {comments.map((comment) => {
        return (
          <div className="comments__comment-container" key={comment.id}>
            <div className="comments__comment-info-wrapper">
              <div className="comments__comment-name">{comment.name}</div>
              <div className="comments__comment-date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </div>
            </div>
            <div className="comments__comment">{comment.comment}</div>
          </div>
        );
      })}
    </div>
  );
}
