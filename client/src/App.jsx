import './App.css'
import { Header, Card, About, Technologies, Portfolio, Contact, Footer, LandingPage } from './components/index'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Check if the browser supports Service Workers
    if ('serviceWorker' in navigator) {
      // Add a 'load' event listener to ensure the page is fully loaded before registering the Service Worker
      window.addEventListener('load', () => {
        // Attempt to register the Service Worker using './service-worker.js' as the script
        navigator.serviceWorker.register('./service-worker.js')
          .then(registration => {
            // If registration is successful, log the scope of the Service Worker
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            // If registration fails, log an error message
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);
  

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