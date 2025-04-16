import React from "react";

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>Welcome to A.I.S AG</h1>
        <p>Eco-efficiency in Waste Management and Power Generation</p>
        <button className="home__cta">Get Started</button>
      </header>

      <section className="home__features">
        <div className="feature">
          <h3>What we do?</h3>
          <p>
            Our company develops and markets products designed specifically for
            the disposal of solid waste, for power generation and supply
            systems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
