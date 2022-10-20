import "./HeroSlide.css";

const HeroSlide = ({ displaySlide }) => {
  const content = ["slide 1", "slide 2", "slide 3", "Like animals?"];
  const btn = ["1", "2", "3", "Take me to the app!"];
  const width = ["100px", "125px", "77px", "158px"];

  return (
    <div className="hero-slide-content">
      <div>{content[displaySlide]}</div>
      <div
        className="hero-slide-btn"
        style={{ width: `${width[displaySlide]}` }}
      >
        {displaySlide !== 3 && (
          <>
            <svg width={24} height={24}>
              <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
            </svg>
            <div>{btn[displaySlide]}</div>
          </>
        )}
        {displaySlide === 3 && (
          <a
            href="https://sungyotkim.github.io/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/"
            target={"_blank"}
            rel="noreferrer"
          >
            <>{btn[displaySlide]}</>
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroSlide;
