import React from 'react';
import './Header.css';  // CSSをインポート

function Header() {
  return (
    <div className="header-container">
      {/* 背景の白いボックス */}
      <div className="header-background"></div>

      {/* タイトルテキスト */}
      <div className="header-text-container">
        <div className="header-text">MAKING INBETWEEN</div>
      </div>

      {/* メニューバーアイコン */}
      <div className="menu-bar">
        <div className="menu-bar-line"></div>
        <div className="menu-bar-line"></div>
        <div className="menu-bar-line"></div>
      </div>
    </div>
  );
}

export default Header;
