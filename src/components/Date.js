import React from 'react';
import './Date.css';  // CSSをインポート


function Date() {
  return (
<div class="event-schedule">
  <div class="event-details">
    <div class="event-label">開催日時</div>
    <div class="event-date-time">
      <div class="event-row">
        <span>11月1日(金)</span>
        <span>13:00-20:00</span>
      </div>
      <div class="event-row">
        <span>11月2日(土)</span>
        <span>10:00-20:00</span>
      </div>
      <div class="event-row">
        <span>11月3日(日)</span>
        <span>10:00-20:00</span>
      </div>
      <div class="event-row">
        <span>11月4日(月・祝)</span>
        <span>10:00-17:00</span>
      </div>
    </div>
  </div>
  <div class="event-location">
  <p>会場三段坂の和館 <span class="address">(東京都台東区池之端 4-17-7)</span></p>
  <p>入場無料</p>
</div>

</div>

  )
}

export default Date;