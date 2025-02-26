import "./Header.scss";
import filterIcon from "../../assets/icons/Filter.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href="/" className="header__title">
          Snaps
        </a>
        <button className="header__filter-btn">
          Filters{" "}
          <img
            className="header__filter-btn-text"
            src={filterIcon}
            alt="Filters icon"
          />
        </button>
      </nav>
    </header>
  );
}
