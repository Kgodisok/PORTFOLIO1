import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import usePortfolioData from '../hooks/usePortfolioData';
import './education.css';

const EducationDetails = () => {
  const data = usePortfolioData();

  if (!data) return <p>Loading...</p>;

  const education = data.education || {};

const certificates = [
  {
    title: "Microsoft Generative AI",
    fileName: "Matsepe_Kgodiso_Generative_AI__Certificate.pdf",
    type: "Certificate"
  },
  {
    title: "Microsoft AI Basics",
    fileName: "Matsepe_Kgodiso_Microsoft_AI_basics_Certificate.pdf",
    type: "Certificate"
  },
  {
    title: "MTN Skills Academy. Internet Fundamentals",
    fileName: "Matsepe_Kgodiso_Internet_Fundamentals_Certificate.pdf",
    type: "Certificate"
  },
  {
    title: "Software Development - Tech Performance Centre",
    fileName: "Matsepe_Kgodiso_Software_Dev_Transcript.pdf",
    type: "Transcript"
  }
];

  return (
    <div id="education" className="education-container">
      <section className="education-section">
        
        {/* Education Sub-Section */}
        <h1 className="section-title">Education</h1>
        
        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap size={50} color="#f59e0b" />
          </div>
          
          <div className="education-info">
            <p>
              <strong>School</strong>
              <span>{education.schoolName || 'N/A'}</span>
            </p>

            <p>
              <strong>Course</strong>
              <span>{education.course || 'N/A'}</span>
            </p>

            <div className="date-group">
              <FaCalendarAlt color="#3b82f6" />
              <p>
                <strong>Duration</strong>
                <span>
                  {education.dateStarted || 'N/A'} – {education.expectedGraduation || 'N/A'}
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        <h1 className="section-title">Certifications</h1>
        
        <div className="certifications-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <h4>{cert.title}</h4>

              <div className="certificate-buttons">
                <a
                  href={`/myDocuments/${cert.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn view-btn"
                >
                  View {cert.type}
                </a>

                <a
                  href={`/myDocuments/${cert.fileName}`}
                  download
                  className="btn download-btn"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default EducationDetails;