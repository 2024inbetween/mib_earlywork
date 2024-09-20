import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css';  // CSSファイルをインポート

// Font Awesomeのライブラリからアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return (
    <div className="footer-container">
      <div className="footer-background"></div>

      <div className="footer-links">
        <div className="footer-link"><Link to="/">TOP</Link></div>
        <div className="footer-link"><Link to="/Access">ACCESS</Link></div>
        <div className="footer-link"><Link to="/About">ABOUT US</Link></div>
        <div className="footer-link"><Link to="/AboutFont">FONT</Link></div>
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
        <div className="footer-email">
          <span>Email:</span>
          <span>2024inbetween@gmail.com</span>
        </div>

      </div>
    </div>
  );
}

export default Footer;

