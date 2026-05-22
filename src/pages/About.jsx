import coffeeImage from "../assets/images/coffee.png";
import sohImage from '../assets/images/Soh.jpg';
import samuelImage from '../assets/images/Samuel.jpg';
import butialImage from '../assets/images/Butial.jpg';
import leabanImage from '../assets/images/Leaban.jpg';
import basalloImage from '../assets/images/Basallo.jpg';

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
      
      {/* TEAM GALLERY (framed cards) */}
      <div className="about-container">
        <h2 style={{ marginTop: 40, textAlign: "center" }}>Meet the Team</h2>

        <p style={{ textAlign: "center", color: "#6b5b53" }}>
          The people who made this site possible.
        </p>

        <div className="team-gallery">
          <div className="team-card">
            <div className="team-frame">
              <img src={samuelImage} alt="Samuel B. Lineses" className="team-avatar" />
            </div>
            <h4>Samuel B. Lineses</h4>
            <p className="team-role">Lead Developer</p>
            <p className="team-bio">The Lead Developer responsible for overseeing the development process and ensuring code quality.</p>
          </div>

          <div className="team-card">
            <div className="team-frame">
              <img src={leabanImage} alt="Jean Rae Julianne A. Leaban" className="team-avatar" />
            </div>
            <h4>Jean Rae Julianne A. Leaban</h4>
            <p className="team-role">Lead Designer</p>
            <p className="team-bio">Oversees the design direction and ensures brand consistency.</p>
          </div>

          <div className="team-card">
            <div className="team-frame">
              <img src={sohImage} alt="Sophia Nicole V. Soh" className="team-avatar" />
            </div>
            <h4>Sophia Nicole V. Soh</h4>
            <p className="team-role">Designer</p>
            <p className="team-bio">In charge of the visual design and brand identity.</p>
          </div>

          <div className="team-card">
            <div className="team-frame">
              <img src={butialImage} alt="Ma Francia A. Butial" className="team-avatar" />
            </div>
            <h4>Ma Francia A. Butial</h4>
            <p className="team-role">Documentation Specialist</p>
            <p className="team-bio">Responsible for creating and maintaining documentation. Ensuring that all information is accurate and up-to-date.</p>
          </div>

          <div className="team-card">
            <div className="team-frame">
              <img src={basalloImage} alt="Jade Oliver B. Basallo" className="team-avatar" />
            </div>
            <h4>Jade Oliver B. Basallo</h4>
            <p className="team-role">Developer</p>
            <p className="team-bio">Responsible for developing and maintaining the website's functionality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;