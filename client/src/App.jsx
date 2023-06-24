import './App.css';
import { Header, About } from './components/index'

function App() {
  return (
    <div>
      <div className='bg-dark'>
        <div className='max-w-[1500px] m-auto'>
          <Header />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;