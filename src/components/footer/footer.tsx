import { FC } from "react";
import "./footer.scss"

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <p>© 2024 Almujtaba Mohammed</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/almujtaba-mohammed">LinkedIn</a>
          <a href="https://github.com/almujtaba">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
