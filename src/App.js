import './App.css'
import Header from './components/Header'
import NewNews from './components/NewNews'

function App() {
  return (
    <div className="App">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1 }}>
        <Header />
      </div>
      <div>
        <div style={{width: '100vw', height: '100vh', position: 'relative',marginTop: '60px' }}>
        <img
          src={`${process.env.PUBLIC_URL}/topimage.png`}
          alt="Top Logo"
          style={{
            width:'100%',
            height:'100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div style={{ position: 'absolute', top: 550, left: 0, width: '100%', height: '100%', textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
          <NewNews />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
