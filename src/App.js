import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App md:w-4/5 mx-auto mb-20 grid gap-y-28">
      <Header/>
      <Profile/>
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
