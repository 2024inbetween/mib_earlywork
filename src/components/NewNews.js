import React from 'react';
import './NewNews.css';

function NewNews() {
  return (
    <div style={{
      width: '80%',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      border: '1px solid #00144E',
      boxSizing: 'border-box',
      }}>
      <h1 style={{ fontSize: '1.5em', color: '#00144E',textAlign: 'left' }}>NEWS</h1>
      <div style={{width: '100%', height: 0, border: '1px #00134E solid'}}></div>
      {/* タイトル */}
      <h2 style={{ fontSize: '1em', color: '#00144E' }}>トークセッション開催決定！</h2>
      {/* 説明文 */}
      <p style={{ fontSize: '1em', lineHeight: '1.5em' }}>
        11月4日（月）に先生と先生のトークセッションを開催することが決定しました！
      </p>
      {/* 詳しく見るリンク */}
      <p style={{ fontSize: '0.9em', color: '#707070', textAlign: 'right' }}>
        <a href="/" style={{ color: '#707070', textDecoration: 'none' }}>詳しく見る＞</a>
      </p>
      <div style={{width: '100%', height: 0, border: '1px #00134E solid'}}></div>
      {/* タイトル */}
      <h2 style={{ fontSize: '1em', color: '#00144E' }}>他のニュース</h2>
      {/* 説明文 */}
      <p style={{ fontSize: '1em', lineHeight: '1.5em' }}>
        なんかあるかな
      </p>
      {/* 詳しく見るリンク */}
      <p style={{ fontSize: '0.9em', color: '#707070', textAlign: 'right' }}>
        <a href="/" style={{ color: '#707070', textDecoration: 'none' }}>詳しく見る＞</a>
      </p>
      <div style={{width: '100%', height: 0, border: '1px #00134E solid'}}></div>
      <p style={{ fontSize: '0.9em', color: '#707070', textAlign: 'right' }}>
        <a href="/" style={{ color: '#707070', textDecoration: 'none' }}>全てのNEWSを見る＞</a>
      </p>
    </div>
  );
}

export default NewNews;

