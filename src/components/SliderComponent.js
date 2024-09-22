import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './SliderComponent.css'; // CSSファイルをインポート

function SliderComponent() {
  return (
    <div className="slider-container">
        <div className="slider-title" style={{fontSize:50,color: '#00144E',paddingBottom:50,fontWeight:800,textShadow: '1px 1px 2px'}}>
            contents
        </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}  // 使用するモジュールを指定
        slidesPerView={1}        // 初期表示のスライド数
        spaceBetween={24}        // スライド間のスペース
        pagination={{ clickable: true }} // ページネーションをクリック可能に
        Navigation
        autoplay={{              // 自動スライド
          delay: 2500,           // 2.5秒ごとにスライド
          disableOnInteraction: false,
        }}
        loop={true}
        loopAdditionalSlides={1}             // スライドをループさせる
        navigation={{            // 明示的にナビゲーションボタンを指定
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        breakpoints={{           // レスポンシブ対応の設定
          600: {
            slidesPerView: 2,    // 画面幅600px以上では2スライド表示
          },
          1025: {
            slidesPerView: 4,    // 画面幅1025px以上では4スライド表示
            spaceBetween: 32,    // スライド間のスペースを32pxに変更
          },
        }}
      >
        {/* スライド1 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/slider1.png`} alt="Slider 1" />
            <h3>昔々</h3>
          </div>
        </SwiperSlide>

        {/* スライド2 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/slider2.png`} alt="Slider 2" />
            <h3>そのまた昔</h3>
          </div>
        </SwiperSlide>

        {/* スライド3 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/slider3.png`} alt="Slider 3" />
            <h3>あるところに</h3>
          </div>
        </SwiperSlide>

        {/* スライド4 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/slider3.png`} alt="Slider 4" />
            <h3>おじいさんと</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/slider3.png`} alt="Slider 4" />
            <h3>おばあさんが</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/slider3.png`} alt="Slider 4" />
            <h3>いました😉</h3>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
}

export default SliderComponent;
