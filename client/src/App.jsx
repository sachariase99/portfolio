import './App.css'
import { Header, Card, About, Technologies, Portfolio, Contact, Footer, LandingPage } from './components/index'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        })
    }
  })
  return (
    <div>
      <div id='blurred' className='bg-dark'>
        <div className='max-w-[1500px] m-auto'>
          <Header />
          <Card />
          <About />
          <Technologies />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
        <LandingPage />
    </div>
  )
}

export default App