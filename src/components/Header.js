import React from 'react';
import './Header.css';  // CSSをインポート
import { slide as Menu } from 'react-burger-menu';


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
      <Menu>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/">About</a>
        <a className="menu-item" href="/">Services</a>
        <a className="menu-item" href="/">Contact</a>
      </Menu>
    </div>
  );
}

export default Header;
