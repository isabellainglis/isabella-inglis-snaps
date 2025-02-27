import "./Footer.scss";
import FacebookIcon from "../../assets/icons/Facebook.svg";
import TwitterIcon from "../../assets/icons/X_twitter.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import PinterestIcon from "../../assets/icons/Pinterest.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__sections-wrapper">
        <div className="footer__text-wrapper">
          <div className="footer__title">Snaps</div>
          <div className="footer__lists-wrapper">
            <ul className="footer__list">
              <li className="footer__list-item">For photographers</li>
              <li className="footer__list-item">Hire talent</li>
              <li className="footer__list-item">Inspiration</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__list-item">About</li>
              <li className="footer__list-item">Careers</li>
              <li className="footer__list-item">Support</li>
            </ul>
          </div>
        </div>
        <div className="footer__icons">
          <img
            src={FacebookIcon}
            alt="Facebook icon"
            className="footer__icon"
          />
          <img
            src={TwitterIcon}
            alt="Twitter icon"
            className="footer__icon footer__icon--twitter"
          />
          <img
            src={InstagramIcon}
            alt="Instagram icon"
            className="footer__icon"
          />
          <img
            src={PinterestIcon}
            alt="Pinterest icon"
            className="footer__icon"
          />
        </div>
      </div>
      <div className="footer__watermarks">
        <p className="footer__watermark">© 2024 Snaps . </p>
        <p className="footer__watermark">Terms</p>
        <p className="footer__watermark">Privacy</p>
        <p className="footer__watermark">Cookies</p>
      </div>
    </section>
  );
}
