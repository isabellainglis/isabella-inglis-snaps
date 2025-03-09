import "./NotFoundPage.scss";
import missingImage from "../../assets/images/question.jpg";

export default function NotFoundPage() {
  return (
    <div className="error">
      <h1 className="error__heading">Oops</h1>
      <h2 className="error__message">404 Page Not Found</h2>
    </div>
  );
}
