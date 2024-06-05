import { FC } from "react";
import "./portfolio.scss"

const Portfolio: FC = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="project-grid">
          <div className="project">
            <img src="path/to/arya-crypto.jpg" alt="Arya Crypto" />
            <h3>Arya Crypto</h3>
            <p>
              A crypto platform that helps users keep track of all their
              portfolios across different crypto exchanges like Binance,
              Coinbase, and more, in one place and also allows the users to
              automate their allocation.
            </p>
          </div>
          <div className="project">
            <img src="path/to/arya-social.jpg" alt="Arya Social App" />
            <h3>Arya Social App</h3>
            <p>
              A trading/investment social media where users can post and discuss
              their trades and financial ideas with other users. The platform
              provides a unique user experience dedicated to sharing financial
              data.
            </p>
          </div>
          <div className="project">
            <img src="path/to/arya-dashboard.jpg" alt="Arya Dashboard" />
            <h3>Arya Dashboard</h3>
            <p>
              A central dashboard for Arya users to manage their account,
              subscriptions, and access services like Arya LMS (Learning system
              where users can watch courses), and licenses management.
            </p>
          </div>
          <div className="project">
            <img
              src="path/to/moneygame-dashboard.jpg"
              alt="Money Game Dashboard"
            />
            <h3>Money Game Dashboard</h3>
            <p>A dashboard for Money Game users to access their account.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
