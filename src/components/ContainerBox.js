import React from 'react';
import './ContainerBox.css';  // CSSをインポート
import { Link} from 'react-router-dom';


function ContainerBox() {
  return (
    <div className="flex-container">
    <div className="flex-item">
      <h2>ACCESS</h2>
      <p>三段坂の和館</p>
      <p>〒110-0008</p>
      <p>東京都台東区池之端 4-17-7</p>
      <div className='learn'><Link to="/Access">Learn more ＞</Link></div>
    </div>

    <div className="flex-item">
      <h2>FONT</h2>
      <p>デザイナーの野老朝雄さんが本展覧会のためにフォントを制作してくださいました。</p>
      <div className='learn'><Link to="/AboutFont">Learn more ＞</Link></div>
    </div>

    <div className="flex-item">
      <h2>WORKS</h2>
      <p>Coming soon ...</p>
      <div className='learn'><Link to="/">Learn more ＞</Link></div>
    </div>

    <div className="flex-item">
      <h2>NEWS</h2>
      <p>近日公開予定のニュースをチェックしてください。</p>
      <div className='learn'><Link to="/">Learn more ＞</Link></div>
    </div>
  </div>
  )
}

export default ContainerBox;

