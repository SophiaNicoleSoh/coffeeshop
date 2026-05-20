
function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">

        <h2>Contact Us</h2>
        <p className="contact-intro">
          We'd love to hear from you ☕
        </p>

        <div className="contact-content">

          <div className="contact-info">

            <div className="info-box">
              <h3>📍 Location</h3>
              <p>Tagaytay City, Philippines</p>
            </div>

            <div className="info-box">
              <h3>📞 Phone</h3>
              <p>+63 912 345 6789</p>
            </div>

            <div className="info-box">
              <h3>⏰ Opening Hours</h3>
              <p>Mon - Sun : 8:00 AM - 10:00 PM</p>
            </div>

          </div>

          <form className="contact-form">

            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;