import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="icons">
        <a
          href={"https://www.instagram.com/fridakahlo/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href={"https://www.facebook.com/fridakahlo"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href={"https://twitter.com/FridaKahlo"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="address">
        <p> Londres 247, Del Carmen, Coyoacán, 04100 Ciudad de México, CDMX, Meksika</p>
        <iframe
        
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120458.33594970636!2d-99.24486531231578!3d19.35516207166329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x85d1ffc400ba3f3b%3A0x6201a4f7f7ccf4a1!2sLondres%20247%2C%20Del%20Carmen%2C%20Coyoac%C3%A1n%2C%2004100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Meksika!3m2!1d19.3551806!2d-99.1624636!5e0!3m2!1str!2str!4v1713266853702!5m2!1str!2str"
          width="320"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
