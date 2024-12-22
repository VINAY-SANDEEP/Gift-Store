import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="fullfooter1">
        {/* Branding Section */}
        <div className="branding1">
          <h1>Vinay Sandeep</h1>
          <h2>Gift Shop</h2>
        </div>

        {/* Left Section */}
        <div className="left">
          <h2>Accessories (6)</h2>
          <h2>Cards (6)</h2>
          <h2>Clothing (6)</h2>
          <h2>Handbags (6)</h2>
          <h2>Jewelries (6)</h2>
          <h2>Office & Stationary (6)</h2>
          <h2>Toys (6)</h2>
          <h2>Wallets (6)</h2>
        </div>

        {/* Middle Section */}
        <div className="middle">
          <h2>About Us</h2>
          <h2>Contact Us</h2>
          <h2>FAQ</h2>
          <h2>Shipping Policy</h2>
        </div>

        {/* Right Section */}
        <div className="right">
          <h1>Sign up for special offers</h1>
          <input type="email" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
        </div>

        {/* Left-Down Section */}
        <div className="left-down">
          <h4>Copyright © 2024 Gift Shop | Powered by Gift Shop</h4>
        </div>

        {/* Right-Down Section */}
        <FontAwesomeIcon icon={faXmark} />
        &nbsp;&nbsp;&nbsp;
         <FontAwesomeIcon icon={faLinkedinIn} />
         &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faInstagram} />
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faFacebookF} />
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faYoutube} />
          &nbsp;&nbsp;&nbsp;
      </div>
    </>
  );
};
export default Footer;
