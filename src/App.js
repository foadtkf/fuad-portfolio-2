import './App.css';
import About from './Components/About';
import Career from './Components/Career';
import CaseStudies from './Components/CaseStudies';
import Hello from './Components/Hello';
import Navbar from './Components/Navbar';
import Process from './Components/Process';
import RecentProjects from './Components/RecentProjects';
import Skillset from './Components/Skillset';
import WNext from './Components/WNext';

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
      <CaseStudies/>
      <WNext/>
    </div>
  );
}

export default App;
