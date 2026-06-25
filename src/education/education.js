import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import usePortfolioData from '../hooks/usePortfolioData';
import './education.css';

const EducationDetails = () => {
  const data = usePortfolioData();

  if (!data) return <p>Loading...</p>;

  return (
    <div id='education'>
    <section className="education-details">
       <h1 style={{fontWeight: '450'}}>Education</h1>
        <FaGraduationCap size={50} color="gold" />
         <p><strong>School</strong>: {data.education.schoolName} </p>
         <p> <strong>Course:</strong> {data.education.course} </p> 
         <div className="date"> <FaCalendarAlt color="white" /> <p> <strong>Date:</strong> {data.education.dateStarted} - {data.education.expectedGraduation} </p> 
         </div> 
    </section>
    </div>
   
  );
};

export default EducationDetails;