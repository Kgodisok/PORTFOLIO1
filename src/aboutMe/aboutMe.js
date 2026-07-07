import { Typewriter } from "react-simple-typewriter";
import usePortfolioData from "../hooks/usePortfolioData";
import "./aboutMe.css";

const AboutMe = () => {
  const data = usePortfolioData();

  if (!data) return <div>Loading...</div>;

  return (
    <section id="about">
      <div className="aboutContent">
        <div className="image-and-name">
          <p className="myName">Matsepe Kgodiso</p>
          <img
            src="/images/profilePhoto.png"
            alt={data.name}
          />
        </div>

        <p className="prf-summary">
          <Typewriter
            words={[data.myProfileSummary]}
            loop={1}
            cursor
            typeSpeed={40}
          />
        </p>
      </div>
    </section>
  );
};

export default AboutMe;