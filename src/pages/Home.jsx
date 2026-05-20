import home from "../assets/images/home.png";
import heart from "../assets/images/heart.png";
import bean from "../assets/images/bean.png";
import leaf from "../assets/images/leaf.png";

import cappuccino from "../assets/images/cappuccino.png";
import matcha from "../assets/images/matcha.png";
import strawberry from "../assets/images/strawberry.png";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate("/menu");
  };

  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">

          <div className="hero-text">
            <h1>
              Good Coffee.
              <br />
              Cozy Moments.
            </h1>

            <p>
              Specialty coffee made with heart.
              A space to slow down, connect,
              and savor every sip.
            </p>

            <button onClick={handleExploreMenu}>Explore Menu</button>
          </div>

          <img src={home} alt="Home" />

        </div>
      </section>

      {/* ABOUT GRID SECTION */}
      <section className="about-grid">

        <div className="about-card">
          <img src={heart} alt="Made with Love" />
          <h3>Made with Love</h3>
          <p>Every cup is crafted with care and passion.</p>
        </div>

        <div className="about-card">
          <img src={bean} alt="Quality Coffee" />
          <h3>Quality Coffee</h3>
          <p>We use only freshly roasted premium beans.</p>
        </div>

        <div className="about-card">
          <img src={leaf} alt="Cozy Atmosphere" />
          <h3>Cozy Atmosphere</h3>
          <p>A warm space to relax, study, or connect.</p>
        </div>

      </section>

      {/* MENU PREVIEW SECTION */}
      <section className="menu-preview">

        <h2>Popular Picks</h2>
        <p>Our customers’ favorite drinks</p>

        <div className="menu-grid">

          <div className="menu-card">
            <img src={cappuccino} alt="Cappuccino" />

            <h3>Cappuccino</h3>
            <p>Rich espresso topped with creamy milk foam.</p>
          </div>

          <div className="menu-card">
            <img src={matcha} alt="Matcha Latte" />

            <h3>Matcha Latte</h3>
            <p>Smooth matcha blended with perfectly steamed milk.</p>
          </div>

          <div className="menu-card">
            <img src={strawberry} alt="Strawberry Frappé" />

            <h3>Strawberry Frappé</h3>
            <p>A sweet and refreshing strawberry blended drink.</p>
          </div>

        </div>

        <button className="menu-btn" onClick={handleExploreMenu}>
          View Full Menu
        </button>

      </section>

    </div>
  );
}

export default Home;