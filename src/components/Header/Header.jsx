import "./Header.scss";
// import filterIcon from "../../assets/icons/Filter.svg";
import arrowIcon from "../../assets/icons/Arrow.svg";
import { Link, useLocation } from "react-router-dom";
import FilterSvg from "../FilterSvg/FilterSvg";

export default function Header({ tagDrawerOpen, setTagDrawerOpen }) {
  const location = useLocation();

  // if location.pathname = "/" ?

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__title">
          Snaps
        </Link>
        {location.pathname === "/" ? (
          <button
            onClick={() => {
              setTagDrawerOpen(!tagDrawerOpen);
            }}
            className={`header__filter-btn ${
              tagDrawerOpen && "header__filter-btn--active"
            }`}
          >
            Filters{" "}
            <FilterSvg
              className="header__filter-btn-icon"
              color={!tagDrawerOpen ? "#1E6655" : "white"}
            />
          </button>
        ) : (
          <Link to="/" className="header__home">
            <img
              className="header__arrow-icon"
              src={arrowIcon}
              alt="Back arrow"
            />
            <div className="header__home-btn">Home</div>
          </Link>
        )}
      </nav>
    </header>
  );
}
