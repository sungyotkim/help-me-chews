const HeroSlide = ({ displaySlide }) => {
  const content = ["slide 1", "slide 2", "slide 3", "slide 4"];
  const btn = ["1", "2", "3", "4"];

  return (
    <div className="hero-slide-content">
      <div>{content[displaySlide]}</div>
      <div className="hero-slide-btn">{btn[displaySlide]}</div>
    </div>
  );
};

export default HeroSlide;
