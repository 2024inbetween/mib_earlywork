import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1 }}>
        <Header />
      </div>
      <div>
        <div style={{ maxWidth: 500, maxHeight: 1000, position: 'relative',marginTop: '60px' }}>
        <img
          src="/topimage.png"
          alt="Top Logo"
          style={{
            width:'100%',
            height:'100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        </div>
      </div>
    </div>
  )
}

export default App
