import React from 'react';
import './ContainerBox.css';  // CSSをインポート
import { Link} from 'react-router-dom';


function ContainerBox() {
  return (
    <div className="flex-container">
    <div className="flex-item">
      <h2>ACCESS</h2>
      <div className='summary'>三段坂の和館</div>
      <div className='summary'>〒110-0008</div>
      <div className='summary'>東京都台東区池之端 4-17-7</div>
      <div className='learn'><Link to="/Access">Learn more ＞</Link></div>
    </div>

    <div className="flex-item">
      <h2>FONT</h2>
      <div className='summary'>デザイナーの野老朝雄さんが本展覧会のためにフォントを制作してくださいました。</div>
      <div className='learn'><Link to="/AboutFont">Learn more ＞</Link></div>
    </div>

    <div className="flex-item">
      <h2>WORKS</h2>
      <div className='summary'>Coming soon ...</div>
      <div className='learn'>{/* <Link to="/Works"> */}Learn more ＞{/* </Link>*/}</div>
    </div>

    <div className="flex-item">
      <h2>ABOUT US</h2>
      <div className='summary'>チームの紹介</div>
      <div className='learn'><Link to="/About">Learn more ＞</Link></div>
    </div>
  </div>
  )
}

export default ContainerBox;

