import React from 'react';
import './Footer.css';  // CSSファイルをインポート

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-background"></div>

      <div className="footer-links">
        <div className="footer-link">TOP</div>
        <div className="footer-link">ACCESS</div>
        <div className="footer-link">ABOUT US</div>
        <div className="footer-link">FONT</div>
      </div>

      <div className="footer-contact">
        <div>CONTACT</div>
        <div className="footer-follow">FOLLOW US</div>
        <div className="footer-email">Email: 2024inbetween@gmail.com</div>
      </div>
    </div>
  );
}

export default Footer;
