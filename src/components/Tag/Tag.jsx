import "./Tag.scss";

export default function Tag({ tag, activeTag, handleTagClick }) {
  return (
    <button
      onClick={() => handleTagClick(tag)}
      className={`tag ${activeTag === tag ? "tag--active" : ""}`}
    >
      {tag}
    </button>
  );
}
