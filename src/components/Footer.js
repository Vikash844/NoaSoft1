import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Assets Management Company Section */}
        <div className="footer-column">
          <h3>Assets Management Company</h3>
          <div className="underline"></div>
          <p>
            NOATech Assets Expert's is a comprehensive solution to your fixed
            asset management needs, which stores asset information in one
            centralized database and allows access to this information to the
            authorized user, anywhere.
          </p>
        </div>

        {/* Products Section */}
        <div className="footer-column">
          <h3>Products</h3>
          <div className="underline"></div>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-column">
          <h3>Social Links</h3>
          <div className="underline"></div>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a></li>
            <li><a href="https://www.instagram.com/noasoft_" target="_blank" rel="noopener noreferrer">📸 Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/noatech-private-limited/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <div className="underline"></div>
          <ul>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
