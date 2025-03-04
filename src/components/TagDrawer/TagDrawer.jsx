import Tag from "../Tag/Tag";
import "./TagDrawer.scss";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function TagDrawer({ tags, activeTag, handleTagClick }) {
  const API_KEY = "cff359d9-80fb-42e0-b9c9-1e1f641007f4";

  return (
    <section className="tag-drawer">
      <h2 className="tag-drawer__title">Filters</h2>
      {tags.map((tag) => {
        return (
          <Tag
            tag={tag}
            key={uuidv4()}
            className="tag-drawer__tag"
            activeTag={activeTag}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </section>
  );
}
