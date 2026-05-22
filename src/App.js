import './App.css';
import NavBar from './navbar/aboutMe';
import Footer from './navbar/footer';
import WebDev from './navbar/webdevskills';
import EducationDetails from './navbar/education';
import Projects from './navbar/projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WebDev />
      <Projects />
      <EducationDetails />
      <Footer />
    </div>
  );
}

export default App;









