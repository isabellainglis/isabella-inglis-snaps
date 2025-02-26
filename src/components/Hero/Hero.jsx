import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <p className="hero__text">Our mission:</p>
      <p className="hero__text-main">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,{" "}
        <span className="hero__text-main--highlight">
          expressed in their unique style
        </span>
      </p>
    </div>
  );
}
