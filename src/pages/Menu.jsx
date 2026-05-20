import americano from "../assets/menu/Americano.png";
import spanishLatte from "../assets/menu/Spanish Latte.png";
import cappuccino from "../assets/menu/Cappuccino.png";
import matchaLatte from "../assets/menu/Matcha Latte.png";
import caramelMacchiato from "../assets/menu/Caramel Macchiato.png";

import mocha from "../assets/menu/Mocha Frappe.png";
import caramel from "../assets/menu/Caramel Frappe.png";
import strawberry from "../assets/menu/Strawberry Frappe.png";
import cookiesCream from "../assets/menu/Cookies & Cream Frappe.png";
import matchaFrappe from "../assets/menu/Matcha Frappe.png";

import cheesecake from "../assets/menu/Cheesecake.png";
import brownie from "../assets/menu/Brownie.png";
import croissant from "../assets/menu/Croissant.png";
import donut from "../assets/menu/Donut.png";
import cookiesDessert from "../assets/menu/Cookies.png";

function Menu() {
  return (
    <section className="menu">
      <div className="menu-container">

        <h2>Our Menu</h2>
        <p>Fresh drinks and desserts made with love ☕</p>

        {/* COFFEE */}
        <h3 className="menu-category">Coffee (Hot & Iced)</h3>

        <div className="menu-grid">

          <div className="menu-card">
            <img src={americano} alt="Americano" />
            <h4>Americano</h4>
            <p>Smooth espresso with hot water</p>
            <span>₱90</span>
          </div>

          <div className="menu-card">
            <img src={spanishLatte} alt="Spanish Latte" />
            <h4>Spanish Latte</h4>
            <p>Sweet creamy espresso drink</p>
            <span>₱130</span>
          </div>

          <div className="menu-card">
            <img src={cappuccino} alt="Cappuccino" />
            <h4>Cappuccino</h4>
            <p>Rich espresso with milk foam</p>
            <span>₱120</span>
          </div>

          <div className="menu-card">
            <img src={matchaLatte} alt="Matcha Latte" />
            <h4>Matcha Latte</h4>
            <p>Creamy green tea latte</p>
            <span>₱140</span>
          </div>

          <div className="menu-card">
            <img src={caramelMacchiato} alt="Caramel Macchiato" />
            <h4>Caramel Macchiato</h4>
            <p>Espresso with caramel drizzle</p>
            <span>₱150</span>
          </div>

        </div>

        {/* FRAPPE */}
        <h3 className="menu-category">Frappe</h3>

        <div className="menu-grid">

          <div className="menu-card">
            <img src={mocha} alt="Mocha Frappe" />
            <h4>Mocha Frappe</h4>
            <p>Chocolate coffee blend</p>
            <span>₱140</span>
          </div>

          <div className="menu-card">
            <img src={caramel} alt="Caramel Frappe" />
            <h4>Caramel Frappe</h4>
            <p>Sweet caramel ice blend</p>
            <span>₱140</span>
          </div>

          <div className="menu-card">
            <img src={strawberry} alt="Strawberry Frappe" />
            <h4>Strawberry Frappe</h4>
            <p>Sweet strawberry blended drink</p>
            <span>₱145</span>
          </div>

          <div className="menu-card">
            <img src={cookiesCream} alt="Cookies and Cream Frappe" />
            <h4>Cookies & Cream</h4>
            <p>Crushed cookies blended</p>
            <span>₱150</span>
          </div>

          <div className="menu-card">
            <img src={matchaFrappe} alt="Matcha Frappe" />
            <h4>Matcha Frappe</h4>
            <p>Green tea ice blend</p>
            <span>₱150</span>
          </div>

        </div>

        {/* DESSERT */}
        <h3 className="menu-category">Dessert</h3>

        <div className="menu-grid">

          <div className="menu-card">
            <img src={cheesecake} alt="Cheesecake" />
            <h4>Cheesecake</h4>
            <p>Creamy classic cake</p>
            <span>₱150</span>
          </div>

          <div className="menu-card">
            <img src={brownie} alt="Brownie" />
            <h4>Brownie</h4>
            <p>Chocolate fudge square</p>
            <span>₱80</span>
          </div>

          <div className="menu-card">
            <img src={croissant} alt="Croissant" />
            <h4>Croissant</h4>
            <p>Buttery pastry</p>
            <span>₱90</span>
          </div>

          <div className="menu-card">
            <img src={donut} alt="Donut" />
            <h4>Donut</h4>
            <p>Sweet glazed bread</p>
            <span>₱70</span>
          </div>

          <div className="menu-card">
            <img src={cookiesDessert} alt="Cookies" />
            <h4>Cookies</h4>
            <p>Fresh baked cookies</p>
            <span>₱60</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Menu;