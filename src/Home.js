import './Home.css'
import NewNews from './components/NewNews'
import Date from './components/Date'
import ContainerBox from './components/ContainerBox'
import SliderComponent from './components/SliderComponent'
import InstagramPost from './components/InstagramPost'


function Home() {
  return (
    <div className="Home">
      <div>
        <div style={{width: '100vw', height: 'auto', position: 'relative',marginTop: '100px' }}>
        <img
        src={`${process.env.PUBLIC_URL}/eyecatch.png`}
        alt="Eye Catch"
        style={{
          width: '100%',        // 親要素の幅に合わせる
          height: 'auto',        // アスペクト比を維持して高さを自動調整
          objectFit: 'cover',    // 画像が親要素をカバーする
          objectPosition: 'center', // 画像の中央部分を表示
        }}
      />
        </div>
      </div>
      <div style={{padding:'20px',color: '#00144E', fontSize: 15, fontFamily: 'Hiragino Sans', fontWeight: '300', wordWrap: 'break-word'}}>
      <p>東京大学建築学科の有志学生による企画展”MAKING INBETWEEN”を11月1日（金）から11月4日（月）にかけて開催します。</p>
      <p>美術家の野老朝雄さんが講師を務める東京大学の授業「造形第六」で学生が制作した作品を展示します。  造形第六では2014年以降”CONDITION  SPECIFIC”という通底するテーマに沿って作品が制作され、建築という枠組みを超えた表現が試みられてきました。</p>
      <p>今年度はサブテーマ”MAKING  INBETWEEN”を起点としてグラフィックや彫刻、ソフトウェアなど、さまざまなメディアを用いた5つの作品が制作されました。 体験型の作品や手にとってご覧いただける作品も多くございますので、老若男女問わずお越しください。</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' ,marginTop: '40px',marginBottom:'80px'}}>
        <NewNews />
      </div>
      <div style={{marginBottom:('80px')}}>
        <Date />
      </div>
      <div style={{marginBottom:('80px')}}>
        <ContainerBox />
      </div>
      <div style={{marginBottom:('80px')}}>
        <SliderComponent />
      </div>
      <div style={{marginBottom:('80px')}}>
        <InstagramPost />
      </div>
    </div>
  )
}

export default Home
