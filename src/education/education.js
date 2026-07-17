import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import usePortfolioData from '../hooks/usePortfolioData';
import './education.css';

const EducationDetails = () => {
  const data = usePortfolioData();

  if (!data) return <p>Loading...</p>;

  const education = data.education || {};

  const documents = [
    {
      title: "Software Development - Tech Performance Centre",
      fileName: "Matsepe_Kgodiso_Software_Dev_Transcript.pdf",
      type: "Transcript"
    },
    {
      title: "Microsoft Introduction to AI",
      fileName: "Matsepe_Kgodiso_Microsoft_Introduction_to_AI.pdf",
      type: "Certificate"
    },
    {
      title: "Coursera Excel Fundamentals for Data Analysis",
      fileName: "Matsepe_Kgodiso_Excel_Fundamentals_For_Data_Analysis.pdf",
      type: "Certificate"
    },
    {
      title: "Microsoft Internet Fundamentals Certification",
      fileName: "Internet_Fundamentals_Certification.pdf",
      type: "Certificate"
    }
  ];

  const transcript = documents.filter(doc => doc.type === "Transcript");
  const certificates = documents.filter(doc => doc.type === "Certificate");

  return (
    <div id="education" className="education-container">
      <section className="education-section">

        <h1 className="section-title">Education</h1>

        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap size={50} color="#f59e0b" />
          </div>

          <div className="education-info">
            <p>
              <strong>Institution</strong>
              <span>{education.schoolName || "N/A"}</span>
            </p>

            <p>
              <strong>Programme</strong>
              <span>{education.course || "N/A"}</span>
            </p>

            <div className="date-group">
              <FaCalendarAlt color="#3b82f6" />

              <p>
                <strong>Duration</strong>

                <span>
                  {education.dateStarted || "N/A"} –{" "}
                  {education.expectedGraduation || "N/A"}
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        <h1 className="section-title">Academic Transcript</h1>

        <div className="certifications-grid">
          {transcript.map((doc) => (
            <div key={doc.fileName} className="certificate-card">
              <h4>{doc.title}</h4>

              <div className="certificate-buttons">
                <a
                  href={`/myDocuments/${doc.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn view-btn"
                  aria-label={`View ${doc.title}`}
                >
                  View Transcript
                </a>

                <a
                  href={`/myDocuments/${doc.fileName}`}
                  download
                  className="btn download-btn"
                  aria-label={`Download ${doc.title}`}
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        <hr className="section-divider" />

       
        <h1 className="section-title">Professional Certifications</h1>

        <div className="certifications-grid">
          {certificates.map((cert) => (
            <div key={cert.fileName} className="certificate-card">
              <h4>{cert.title}</h4>

              <div className="certificate-buttons">
                <a
                  href={`/myDocuments/${cert.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn view-btn"
                  aria-label={`View ${cert.title}`}
                >
                  View Certificate
                </a>

                <a
                  href={`/myDocuments/${cert.fileName}`}
                  download
                  className="btn download-btn"
                  aria-label={`Download ${cert.title}`}
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