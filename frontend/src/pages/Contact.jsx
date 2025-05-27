import "./css/Contact.css";
const Contact = () => {
  return (
    <div className="contact-main">
      <div>
        <div className="contact-content">
          <div>
            <i class="fa-solid fa-phone"></i>
            <span>Call To Us</span>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +92 311 7879393</p>
        </div>
        <div className="contact-content">
          <div>
            <i class="fa-solid fa-envelope"></i>
            <span>Write To Us</span>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="contact-inputs">
        <div className="sm-inputs">
          <input
            placeholder="Your Name *"
            className="input-font input-contact"
            type="text"
            name="name"
          />
          <input
            placeholder="Your Email *"
            className="input-font input-contact"
            type="text"
            name="email"
          />
          <input
            placeholder="Your Phone *"
            className="input-font input-contact"
            type="text"
            name="phone"
          />
        </div>
        <input
          placeholder="Your Message"
          className="input-font input-large-contact"
          type="text"
          name="message"
        />
        <button className="contact-btn">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
