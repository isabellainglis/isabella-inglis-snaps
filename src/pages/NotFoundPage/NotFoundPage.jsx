import "./NotFoundPage.scss";
import ghostImage from "../../assets/images/ghost.png";

export default function NotFoundPage() {
  return (
    <div className="error">
      <h1 className="error__heading">Oops</h1>
      <img className="error__img" src={ghostImage} alt="Ghost in sunglasses" />
      <h2 className="error__message">404 Page Not Found</h2>
    </div>
  );
}
