import './App.css';
import ParticleBg from './components/ParticleBg';
import HeaderSection from './components/HeaderSection';
import AboutMe from './components/AboutMe';
import AnimateCursor from './components/AnimateCursor';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-[100%] h-full bg-[#151746]">
      <AnimateCursor/>
      <ParticleBg/>
      <HeaderSection/>
      <AboutMe/>
      <Experience/>
      <Portfolio/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
