import { StatusBar } from './components/StatusBar'
import starImg from '/star.png'
import './App.css'

function App() {
  return (
    <main className="landing">
      <img className="landing__star" src={starImg} alt="" aria-hidden="true" />

      <div className="landing__content">
        <span className="landing__badge">New Version</span>

        <h1 className="landing__title">Android Status Bar</h1>

        <p className="landing__subtitle">
          Enhance the aesthetic appeal of your user interface by using the New
          Modern Android Status bar
        </p>

        <div className="landing__bars">
          <StatusBar variant="dark" />
          <StatusBar variant="light" />
        </div>
      </div>
    </main>
  )
}

export default App
