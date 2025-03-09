import Tag from "../Tag/Tag";
import "./TagDrawer.scss";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TagDrawer({
  API_KEY,
  activeTag,
  handleTagClick,
  error,
  setError,
}) {
  const [tags, setTags] = useState(null);

  const fetchTagsData = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=${API_KEY}`
      );

      setTags(data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTagsData();
  }, []);

  if (error) {
    return <h2 className="error-msg">Something went wrong</h2>;
  }

  if (!tags) {
    return <p className="loading">Loading...</p>;
  }

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
