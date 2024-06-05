import { FC } from "react";
import "./contact.scss"

const Contact: FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <form
          action="mailto:mujtabaimad8@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>Email: mujtabaimad8@gmail.com</p>
          <p>Phone: +971 529402069</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/almujtaba-mohammed">
              LinkedIn
            </a>
            <a href="https://github.com/almujtaba">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
