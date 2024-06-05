import { FC } from "react";
import "./testimonials.scss"

const Testimonial: FC = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              "Almujtaba has been instrumental in leading our development team
              and delivering high-quality projects on time." - Client A, Company
              A
            </p>
          </div>
          <div className="testimonial">
            <p>
              "His expertise in frontend technologies and agile methodologies is
              exceptional." - Client B, Company B
            </p>
          </div>
        </div>
        <h2>Clients</h2>
        <div className="clients-logos">
          <img src="path/to/client-logo1.png" alt="Client 1" />
          <img src="path/to/client-logo2.png" alt="Client 2" />
          <img src="path/to/client-logo3.png" alt="Client 3" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
