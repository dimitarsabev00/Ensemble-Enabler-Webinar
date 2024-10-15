import "./Footer.scss";
import FooterLogo from "../../assets/icons/footer-logo.svg";
import images from "../../images";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={FooterLogo} alt="Ensemble Enabler Logo" />
          </div>

          <div className="footer-links">
            <h2>Pages</h2>
            <ul>
              <li>
                <a href="https://www.ensembleenabler.com/en/what-we-do/" target="_blank">What we do</a>
              </li>
              <li>
                <a href="https://www.ensembleenabler.com/en/who-we-are/" target="_blank">Who we are</a>
              </li>
              <li>
                <a href="https://www.ensembleenabler.com/en/blog/" target="_blank">Blog</a>
              </li>
              <li>
                <a href="https://www.ensembleenabler.com/en/ripple/" target="_blank">The Ripple</a>
              </li>
              <li>
                <a href="https://www.ensembleenabler.com/de/" target="_blank">Deutsch</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h2>Get in touch</h2>
            <p>
              <a href="mailto:value@ensembleenabler.com">
                value@ensembleenabler.com
              </a>
            </p>
            <p>
              <a href="tel:+498972939723">+49 89 72 93 97 23</a>
            </p>
            <p><a href="https://www.linkedin.com/company/ensemble-enabler/" target="_blank"><img src={images.linkedInIcon} alt="LinkedIn Icon" /></a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Ensemble Enabler. All rights reserved.</p>
          <ul className="footer-bottom-links">
            <li>
              <a href="https://www.ensembleenabler.com/en/privacy-policy/" target="_blank">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.ensembleenabler.com/en/imprint/" target="_blank">Imprint</a>
            </li>
            <li>
              <a href="https://www.ensembleenabler.com/en/contact-2/" target="_blank">Connect with us</a>
            </li>
            <a
              href="https://www.linkedin.com/company/ensemble-enabler/"
              target="_blank"
            ></a>
          </ul>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
