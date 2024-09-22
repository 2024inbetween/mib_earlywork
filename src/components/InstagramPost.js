import React,{ useEffect } from 'react';
import './InstagramPost.css';

function InstagramPost() {
    useEffect(() => {
        // Instagramの埋め込みスクリプトを動的にロード
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }, []);
      return (
        <div className="instagram-grid-container">
            <div className="instagram-title" style={{fontSize:50,color: '#00144E',paddingBottom:50,fontWeight:800,textShadow: '1px 1px 2px'}}>
                Instagram
            </div>
          <div className="instagram-grid">
            {/* 埋め込みたい投稿のURLを追加 */}
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C-XdRxMJpbM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="14"></blockquote>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C-BT9k_IFHA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="14"></blockquote>
          </div>
        </div>
      );
  }
  export default InstagramPost;