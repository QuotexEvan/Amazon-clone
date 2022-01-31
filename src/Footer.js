import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="footer">
      <div className="backButton">
        <button
          className="backtotop_button"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        >
          Back to top
        </button>
      </div>
      <div className="footer_main">
        <div className="footer_info">
          <div className="footer_infoextra">
            <h3>Get to Know Us</h3>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
            </ul>
          </div>
          <div className="footer_infoextra">
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
            </ul>
          </div>
          <div className="footer_infoextra">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="footer_infoextra">
            <h3> Let Us Help You</h3>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacement</li>
              <li>Manage Your Content and Devices</li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
