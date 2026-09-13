import usePortfolioData from '../hooks/usePortfolioData';
import './education.css';

const EducationDetails = () => {
  const data = usePortfolioData();

  if (!data) return <p>Loading...</p>;

  const documents = [
    {
      title: "Introduction to Front-End Development - Meta",
      fileName: "Matsepe_Kgodiso_Introduction_to_frontend_development_Meta_Certificate.pdf",
      type: "Certificate",
      category: "Meta Frontend Development"
    },
    {
      title: "HTML and CSS in Depth - Meta",
      fileName: "Matsepe_Kgodiso_HTML_and_CSS_Meta_Certificate.pdf",
      type: "Certificate",
      category: "Meta Frontend Development"
    },
    {
      title: "Programming with JavaScript - Meta",
      fileName: "Matsepe_Kgodiso_Programming_With_JavaScript_Meta_Certificate.pdf",
      type: "Certificate",
      category: "Meta Frontend Development"
    },
    {
      title: "Version Control - Meta",
      fileName: "Matsepe_Kgodiso_Version_Control_Meta_Certificate.pdf",
      type: "Certificate",
      category: "Meta Frontend Development"
    },
    {
      title: "Microsoft Introduction to AI",
      fileName: "Matsepe_Kgodiso_Microsoft_Introduction_to_AI.pdf",
      type: "Certificate",
      category: "Professional"
    },
    {
      title: "IoT (Internet of Things) Wireless & Cloud Computing Emerging Technologies",
      fileName: "Matsepe_Kgodiso_Cloud_Computing_certificate.pdf",
      type: "Certificate",
      category: "Professional"
    },
    {
      title: "Coursera Excel Fundamentals for Data Analysis",
      fileName: "Matsepe_Kgodiso_Excel_Fundamentals_For_Data_Analysis.pdf",
      type: "Certificate",
      category: "Professional"
    },
    {
      title: "MTN Skills Academy GSMA Digital Skills: Apps & Internet Essentials",
      fileName: "Internet_Fundamentals_Certification.pdf",
      type: "Certificate",
      category: "Professional"
    },
    {
      title: "Basic Information Literacy",
      fileName: "Matsepe_Kgodiso_Basic_Data_Literacy_certificate.pdf",
      type: "Certificate",
      category: "Professional"
    }
  ];

  const metaCertificates = documents.filter(
    doc => doc.type === "Certificate" && doc.category === "Meta Frontend Development"
  );
  const certificates = documents.filter(
    doc => doc.type === "Certificate" && doc.category === "Professional"
  );

  return (
    <div id="education" className="education-container">
      <section className="education-section">

        <h1 className="section-title">Meta Frontend Development (In Progress)</h1>

        <div className="certifications-grid">
          {metaCertificates.map((cert) => (
            <div key={cert.fileName || cert.title} className="certificate-card">
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