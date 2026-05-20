import coffeeImage from "../assets/images/coffee.png";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-row">

          {/* IMAGE */}
          <div className="about-image">
            <img src={coffeeImage} alt="Coffee Shop" />
          </div>

          {/* TEXT */}
          <div className="about-text">
            <h2>About Brew Haven</h2>

            <p className="about-intro">
              A cozy coffee shop where every cup is brewed with care and every visit feels like home.
            </p>

            <div className="about-boxes">

              <div className="about-box">
                <h3>☕ Our Coffee</h3>
                <p>Freshly brewed using high-quality beans for rich flavor.</p>
              </div>

              <div className="about-box">
                <h3>🌿 Our Space</h3>
                <p>A calm and cozy environment perfect for studying or relaxing.</p>
              </div>

              <div className="about-box">
                <h3>🤝 Our Goal</h3>
                <p>To create a welcoming place for everyone who loves coffee.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;