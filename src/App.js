import './App.css';
import About from './Components/About';
import Career from './Components/Career';
import Hello from './Components/Hello';
import Navbar from './Components/Navbar';
import Process from './Components/Process';
import RecentProjects from './Components/RecentProjects';
import Skillset from './Components/Skillset';

function App() {
  return (
    <div className='lg:ml-20 lg:mr-20'>
      <Navbar/>
      <Hello/>
      <Skillset/>
      <Process/>
      <RecentProjects/>
      <Career/>
      <About/>
    </div>
  );
}

export default App;
