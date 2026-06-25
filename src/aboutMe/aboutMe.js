import { Typewriter } from 'react-simple-typewriter';
import './aboutMe.css';
import usePortfolioData from '../hooks/usePortfolioData';

import {
  imageStyles,
  navBarStyles,
  descriptionStyles,
  aboutMeStyles
} from './aboutMeStyles';

const AboutMe = () => {
  const data = usePortfolioData();

  if (!data) return <div>Loading...</div>;

  return (
    <div id='about' style={aboutMeStyles}>
    <section style={navBarStyles}>
      <img src="/images/profilePhoto.png" alt={data.name} style={imageStyles} />
      <p className="sde-tittle">
        <u>{data.myTittle}</u>
      </p>
      <p style={descriptionStyles} className="prf-summary">
        <Typewriter words={[data.myProfileSummary]} loop={1} cursor typeSpeed={40} />
      </p>
    </section>
    </div>
  );
};

export default AboutMe;