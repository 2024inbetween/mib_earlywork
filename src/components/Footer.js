import React from 'react';
import './Footer.css';  // CSSファイルをインポート

// Font Awesomeのライブラリからアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
        <div className="footer-follow">
          FOLLOW US<br/>
          <a href="https://www.instagram.com/utokyoarchitecture2024?igsh=MmVIMjlkMTBhMg==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/utarch2024?s=21" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        <div className="footer-email">Email: 2024inbetween@gmail.com</div>
      </div>
    </div>
  );
}

export default Footer;

