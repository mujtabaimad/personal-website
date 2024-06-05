import { FC } from "react";
import "./hero.scss"

const Hero: FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Almujtaba Mohammed</h1>
        <p>Senior Frontend Engineer</p>
        <a href="#portfolio" className="cta">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
