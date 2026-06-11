import { Typewriter } from 'react-simple-typewriter';
import './aboutMe.css';
import usePortfolioData from '../hooks/usePortfolioData';

import {
  imageStyles,
  navBarStyles,
  descriptionStyles,
  nameStyles,
} from './aboutMeStyles';

const AboutMe = () => {
  const data = usePortfolioData();

  if (!data) return <div>Loading...</div>;

  return (
    <section style={navBarStyles}>
      <h1 style={nameStyles}>{`< Hello World! I am ${data.name} ${data.surname} />`}</h1>
      <img src="/images/profilePhoto.png" alt={data.name} style={imageStyles} />
      <p className="sde-tittle">
        <u>{data.myTittle}</u>
      </p>
      <p style={descriptionStyles} className="prf-summary">
        <Typewriter words={[data.myProfileSummary]} loop={1} cursor typeSpeed={40} />
      </p>
    </section>
  );
};

export default AboutMe;