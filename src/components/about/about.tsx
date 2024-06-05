import { FC } from "react";
import "./about.scss"

const About: FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="profile-pic">
          <img src="path/to/profile-pic.jpg" alt="Almujtaba Mohammed" />
        </div>
        <div className="bio">
          <h2>About Me</h2>
          <p>
            Senior software engineer with over 6 years of experience in software
            engineering and leading development teams with extensive experience
            in the development of web applications. Proficient in both front-end
            technologies (ReactJS, AngularJS) and back-end technologies (Django,
            NodeJS).
          </p>
          <h3>Skills</h3>
          <ul>
            <li>
              <strong>Web Frontend:</strong> ReactJS, NextJS, AngularJS,
              TypeScript, JavaScript, HTML5, CSS/SCSS, Flutter, Figma,
              micro-frontends, Tailwind
            </li>
            <li>
              <strong>Web Backend:</strong> Django REST framework, NodeJS,
              PostgreSQL, Firebase, GCP, Spring Boot
            </li>
            <li>
              <strong>Mobile Development:</strong> Experienced with using
              Flutter to build mobile apps
            </li>
            <li>
              <strong>General:</strong> Git, Problem solving, Docker, CI/CD,
              Google Cloud Services, Payment gateways (Stripe, Checkout), REST
              APIs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
