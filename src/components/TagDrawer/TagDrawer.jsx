import Tag from "../Tag/Tag";
import "./TagDrawer.scss";
import { v4 as uuidv4 } from "uuid";

export default function TagDrawer({ tags }) {
  return (
    <section className="tag-drawer">
      <h2 className="tag-drawer__title">Filters</h2>
      {tags.map((tag) => {
        return <Tag tag={tag} key={uuidv4()} className="tag-drawer__tag" />;
      })}
    </section>
  );
}
