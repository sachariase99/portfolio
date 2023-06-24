import './App.css';
import { Header, Card, About, Technologies, Portfolio, Contact, Footer, LandingPage } from './components/index'

function App() {
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
  );
}

export default App;