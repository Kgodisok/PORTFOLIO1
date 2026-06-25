import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import usePortfolioData from '../hooks/usePortfolioData';
import { iconStyles, footerStyles } from '../footer/footerStyles';
import './footer.css';

const Footer = () => {
  const data = usePortfolioData();

  if (!data) return <p>Loading...</p>;

  return (
    <div id='contacts'>
    <footer style={{ backgroundColor: 'black', marginBottom: 0 }}>
      <h1 style={{ color: 'white', background: 'black', margin: 0, fontWeight: '450' }}>Contact Information</h1>
      <div style={iconStyles} className="footer-contact-icons">
        <a href={`https://wa.me/${data.cellPhoneNumber[0]}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} color="green" />
        </a>
        <a href={`tel:${data.cellPhoneNumber[0]}`}>
          <FaPhone size={30} color="darkGray" />
        </a>
        <a href={`mailto:${data.emailAddress}`}>
          <FaEnvelope size={30} color="orange" />
        </a>
        <a href={data.linkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={30} />
        </a>
        <a href={data.github} target="_blank" rel="noopener noreferrer">
          <SiGithub size={30} color="white" />
        </a>
        <a href={data.x} target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={30} color="white" />
        </a>
      </div>
      <div style={footerStyles} className="footer-cnt">
        <FaMapMarkerAlt color="white" />
        <p>
          <u>
            {data.address.city}, {data.address.province}, {data.address.country}, {data.address.code}
          </u>
        </p>
      </div>
      <div style={footerStyles}>
        <p style={{ color: 'white', fontSize: '13px' }}>&copy; 2026 Matsepe Kgodiso | Built With React</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;