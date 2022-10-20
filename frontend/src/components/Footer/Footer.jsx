import "./Footer.css";
import yelpLogo from "../../assets/yelp-logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-left-container">
            <div>
              Powered by React, HTML, CSS, Rails, and
              <img src={yelpLogo} alt="Yelp" id="yelp-logo" />
            </div>
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
