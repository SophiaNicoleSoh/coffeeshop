function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Brew Haven</h2>

          <p>
            Serving comfort, connection,
            and handcrafted coffee every day.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Tagaytay City, Cavite</p>
          <p>brewhaven@gmail.com</p>
          <p>+63 912 345 6789</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Brew Haven. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;