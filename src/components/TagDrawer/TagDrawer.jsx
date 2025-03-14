import Tag from "../Tag/Tag";
import "./TagDrawer.scss";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";
import loader from "../../assets/icons/loader.gif";

export default function TagDrawer({
  activeTag,
  handleTagClick,
  error,
  setError,
}) {
  const [tags, setTags] = useState(null);

  const fetchTagsData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/tags`
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
    return (
      <h2 className="error-msg">
        Unable to load tags. Please try again shortly
      </h2>
    );
  }

  if (!tags) {
    return <img className="loading" src={loader} alt="Spinning loader" />;
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
