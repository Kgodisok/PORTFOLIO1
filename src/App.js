import './App.css';
import { lazy, Suspense } from 'react';
const NavBar  = lazy(() => import('./aboutMe/aboutMe'));
const Footer  = lazy(() => import('./footer/footer'));
const WebDev  = lazy(() => import('./webDevSkills/webDevSkills'));
const EducationDetails = lazy(() => import('./education/education'));
const Projects = lazy(() => import('./projects/projects'));


function App() {
  return (
    <div className="App">
      <Suspense fallback ={<div>Loading...</div>}>
        <NavBar />
        <WebDev />
        <Projects />
        <EducationDetails />
        <Footer />
        </Suspense>
    </div>
  );
}

export default App;









