import './App.css'
import qr from './assets/image-qr-code.png'

function App() {

  return (
    <div className="App">
      <div className='Container'>
        <img className='qr-image' alt='qrimage' src={qr}></img>
        <div className='Title'>
          Improve your front-end skills by building projects
        </div>
        <div className='Description'>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </div>
      </div>
    </div>
  )
}

export default App
