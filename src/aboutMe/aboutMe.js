import { Typewriter } from "react-simple-typewriter";
import usePortfolioData from "../hooks/usePortfolioData";
import "./aboutMe.css";

const AboutMe = () => {
  const data = usePortfolioData();

  if (!data) return <div>Loading...</div>;

  return (
    <section id="about">
      <div className="aboutContent">
        {/* Profile Image */}
        <img
          src="/images/profilePhoto.png"
          alt={data.name}
        />

        {/* Title */}
        <p className="sde-tittle">
          <u>{data.myTittle}</u>
        </p>

        {/* Description */}
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