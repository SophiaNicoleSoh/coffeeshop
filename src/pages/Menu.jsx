import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  const menuSections = [
    {
      title: "Coffee (Hot & Iced)",
      items: [
        {
          img: americano,
          title: "Americano",
          desc: "Smooth espresso with hot water",
          price: "₱90",
        },
        {
          img: spanishLatte,
          title: "Spanish Latte",
          desc: "Sweet creamy espresso drink",
          price: "₱130",
        },
        {
          img: cappuccino,
          title: "Cappuccino",
          desc: "Rich espresso with milk foam",
          price: "₱120",
        },
        {
          img: matchaLatte,
          title: "Matcha Latte",
          desc: "Creamy green tea latte",
          price: "₱140",
        },
        {
          img: caramelMacchiato,
          title: "Caramel Macchiato",
          desc: "Espresso with caramel drizzle",
          price: "₱150",
        },
      ],
    },
    {
      title: "Frappe",
      items: [
        {
          img: mocha,
          title: "Mocha Frappe",
          desc: "Chocolate coffee blend",
          price: "₱140",
        },
        {
          img: caramel,
          title: "Caramel Frappe",
          desc: "Sweet caramel ice blend",
          price: "₱140",
        },
        {
          img: strawberry,
          title: "Strawberry Frappe",
          desc: "Sweet strawberry blended drink",
          price: "₱145",
        },
        {
          img: cookiesCream,
          title: "Cookies & Cream",
          desc: "Crushed cookies blended",
          price: "₱150",
        },
        {
          img: matchaFrappe,
          title: "Matcha Frappe",
          desc: "Green tea ice blend",
          price: "₱150",
        },
      ],
    },
    {
      title: "Dessert",
      items: [
        {
          img: cheesecake,
          title: "Cheesecake",
          desc: "Creamy classic cake",
          price: "₱150",
        },
        {
          img: brownie,
          title: "Brownie",
          desc: "Chocolate fudge square",
          price: "₱80",
        },
        {
          img: croissant,
          title: "Croissant",
          desc: "Buttery pastry",
          price: "₱90",
        },
        {
          img: donut,
          title: "Donut",
          desc: "Sweet glazed bread",
          price: "₱70",
        },
        {
          img: cookiesDessert,
          title: "Cookies",
          desc: "Fresh baked cookies",
          price: "₱60",
        },
      ],
    },
  ];

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredSections = menuSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        const text = `${item.title} ${item.desc}`.toLowerCase();
        return text.includes(normalizedSearch);
      }),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <section className="menu">
      <div className="menu-container">
        <h2>Our Menu</h2>
        <p>Fresh drinks and desserts made with love ☕</p>

        <div className="menu-search">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search drinks and desserts..."
            aria-label="Search menu"
          />
        </div>

        {filteredSections.length === 0 ? (
          <p className="menu-no-results">No items match your search.</p>
        ) : (
          filteredSections.map((section) => (
            <div key={section.title}>
              <h3 className="menu-category">{section.title}</h3>
              <div className="menu-grid">
                {section.items.map((item) => (
                  <div className="menu-card" key={item.title}>
                    <img src={item.img} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Menu;
