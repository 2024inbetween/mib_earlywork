import React from 'react';
import "./Access.css";

function Access(){
    return(
        <div>
            <img
                src={`${process.env.PUBLIC_URL}/access.png`}
                alt="Access Logo"
                style={{
                    width: '40%',        // 親要素の幅に合わせる
                    height: 'auto',        // アスペクト比を維持して高さを自動調整
                    objectFit: 'cover',    // 画像が親要素をカバーする
                    objectPosition: 'center',
                    marginTop:60, 
                }}
            />
            <div className='access-text1'>
                <h2>会場</h2>
                <p>三段坂の和館</p>
                <h2>住所</h2>
                <p>〒110-0008 東京都台東区池之端 4-17-7</p>
                <div className='wakan'>和館の場所が<span class="ten">わかん</span>ない！という人は下のマップをご参照ください。</div>
            </div>
            <div className='mapTitle' style={{textAlign:'center',fontSize:'30px',paddingTop:'50px'}}>MAP</div>
            <div className='mapToWakan'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.277250846479!2d139.7666815760435!3d35.71939937257499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d00155e113f%3A0xbeb57f3cb07c36b0!2z5LiJ5q615Z2C44Gu5ZKM6aSo!5e0!3m2!1sja!2sjp!4v1726801587470!5m2!1sja!2sjp"
                    width="100%"
                    height="300"
                    style={{ border: "0" }}  // オブジェクト形式
                    title="small Google Map showing the location of 和館"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className='access-text2'>
                <h2>公共交通機関</h2>
                <p>千代田線　根津駅　徒歩8分<br/>JR各線　日暮里駅　徒歩15分</p>
                <h2>ご案内</h2>
                <p>入場は無料です。<br/>会場には靴を脱いでお入りいただきます。<br/>駐車場や駐輪場はございません。</p>
                <h2>お問い合わせ</h2>
                <p style={{paddingBottom:'20px'}}>Email: 2024inbetween@gmail.com</p>
            </div>
        </div>
    )
}

export default Access;