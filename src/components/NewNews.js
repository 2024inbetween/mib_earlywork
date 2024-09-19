import React from 'react';
import './NewNews.css';

function NewNews() {
  return (
    <div className="news-container">
      <div className="news-background">
        <div className="news-border"></div>
      </div>
      <div className="news-title">
        トークセッション開催決定！
      </div>
      <div className="news-content">
        <p>11月4日（月）に先生と先生のトークセッショ</p>
        <p>ンを開催します。</p>
      </div>
      <div className="news-link">
        詳しく見る＞
      </div>
    </div>
  );
}

export default NewNews;
