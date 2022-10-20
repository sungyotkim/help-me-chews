import "./ContactMeDropdown.css";
import { useState } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2d2e2f",
    fontSize: 12,
    boxShadow: "rgb(0 0 0 / 15%) 0 0 18px",
    borderRadius: "4px",
    padding: "12px 16px",
    position: "relative",
    fontFamily: "'Poppins', Arial, Helvetica, sans-serif;",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#2d2e2f",
  },
}));

const ContactMeDropdown = ({ styleBlack }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverStyle, setHoverStyle] = useState();

  const handleMouseOver = () => {
    setIsHovering(true);
    setHoverStyle({ borderBottom: "4px solid #fa4d4d" });
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setHoverStyle();
  };

  return (
    <div
      className="contact-me-dropdown-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="contact-me-dropdown" style={hoverStyle}>
        <span className="navbar-span" style={styleBlack}>
          Contact Me
        </span>
        <svg className="svg-dropdown-arrow" style={styleBlack}>
          <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
        </svg>
      </div>
      {isHovering && (
        <div className="contact-me-dropdown-revealed">
          <div className="contact-me-left-dropdown">
            <CustomToolTip title="sungyotkim@gmail.com" arrow placement="left">
              <div className="contact-me-left-dropdown-option no-cursor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z" />
                </svg>
                <div>Email</div>
              </div>
            </CustomToolTip>
            <a
              href="https://github.com/sungyotkim"
              target={"_blank"}
              rel="noreferrer"
              className="contact-me-left-dropdown-option"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <div>Github</div>
            </a>
          </div>
          <div className="contact-me-right-dropdown">
            <CustomToolTip title="718-702-2156" arrow placement="right">
              <div className="contact-me-right-dropdown-option no-cursor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <div>Phone</div>
              </div>
            </CustomToolTip>
            <a
              href="https://www.linkedin.com/in/sungyo-kim-ab7a30163/"
              target={"_blank"}
              rel="noreferrer"
              className="contact-me-right-dropdown-option"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                <line x1="8" y1="11" x2="8" y2="16" />{" "}
                <line x1="8" y1="8" x2="8" y2="8.01" />{" "}
                <line x1="12" y1="16" x2="12" y2="11" />{" "}
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <div>LinkedIn</div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMeDropdown;
