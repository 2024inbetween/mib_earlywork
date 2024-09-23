import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

function News() {
    const [newsData, setNewsData] = useState([]);

// 外部JSONファイルからニュースデータを取得
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/newsData.json`)
        .then((response) => response.json())
        .then((data) => setNewsData(data))
        .catch((error) => console.error("ニュースデータの取得に失敗しました", error));
    }, []);

    return (
        <div>
        <img
        src={`${process.env.PUBLIC_URL}/news.png`}
        alt="News Logo"
        style={{
            width: '40%',        // 親要素の幅に合わせる
            height: 'auto',      // アスペクト比を維持して高さを自動調整
            objectFit: 'cover',  // 画像が親要素をカバーする
            objectPosition: 'center',
            marginTop: 60, 
        }}
        />
        <div class='title'>contents</div>

        <div className="news-list">
        {newsData.map((news) => (
            <Link to={`/news/${news.id}`} style={{textDecoration:'none'}}>
            <div key={news.id} className="news-item">
                <img
                src={`${process.env.PUBLIC_URL}${news.thumbnail}`} 
                alt={news.title}
                style={{ width: '60%', height: 'auto', objectFit: 'cover' }}
                />
                <div className='contentsTitle' style={{textDecoration:'none'}}>{news.title}</div>
            
            <p className="news-date">{news.date}</p>
            </div>
            </Link>
        ))}
        </div>
    </div>
    );
}

export default News;

