import "./Header.scss";
import filterIcon from "../../assets/icons/Filter.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__title">Snaps</h1>
        <button className="header__filter-btn">
          Filters{" "}
          <img
            className="header__filter-btn-text"
            src={filterIcon}
            alt="Filters icon"
          />
        </button>
      </nav>
      <div className="header__hero-text-wrapper">
        <p className="header__hero-text">Our mission:</p>
        <p className="header__hero-text-main">
          Provide photographers a space to share photos of the neighborhoods
          they cherish,{" "}
          <span className="header__hero-text-main--highlight">
            expressed in their unique style
          </span>
        </p>
      </div>
    </header>
  );
}
