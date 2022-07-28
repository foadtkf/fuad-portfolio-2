import './App.css';
import Career from './Components/Career';
import Hello from './Components/Hello';
import Navbar from './Components/Navbar';
import Process from './Components/Process';
import Skillset from './Components/Skillset';

function App() {
  return (
    <div className='lg:ml-20 lg:mr-20'>
      <Navbar/>
      <Hello/>
      <Skillset/>
      <Process/>
      <Career/>
    </div>
  );
}

export default App;
