import './App.css';
import NavBar from './navbar/aboutMe';
import Footer from './navbar/footer';
import WebDev from './navbar/webdevskills';
import EducationDetails from './navbar/education';


function App() {
  return (
    <div className="App">
      <NavBar />
      <WebDev />
      <EducationDetails />
      <Footer />
    </div>
  );
}

export default App;









