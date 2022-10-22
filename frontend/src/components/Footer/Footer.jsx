import "./Footer.css";
import yelpLogo from "../../assets/yelp-logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-left-container">
            <a href="https://www.yelp.com/" target="_blank" rel="noreferrer">
              Powered by React, HTML, CSS, Rails, and
              <img src={yelpLogo} alt="Yelp" id="yelp-logo" />
            </a>
            <div>Developed by Sungyo (Tommy) Kim</div>
          </div>
          <div className="footer-right-container">
            <div>Businesses and marked reviews are from Yelp</div>
            <div>
              Reviews (and blue stars) are otherwise simulated and not from Yelp
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
