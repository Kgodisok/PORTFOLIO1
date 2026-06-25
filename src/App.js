import './App.css';
import NavBar from './navbar/navbar';
import AboutMe from './aboutMe/aboutMe';
import Footer from './footer/footer';
import WebDev from './webDevSkills/webDevSkills';
import EducationDetails from './education/education';
import Projects from './projects/projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <WebDev />
      <Projects />
      <EducationDetails />
      <Footer />
    </div>
  );
}

export default App;









