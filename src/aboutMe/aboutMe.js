import { Typewriter } from "react-simple-typewriter";
import usePortfolioData from "../hooks/usePortfolioData";
import "./aboutMe.css";

const AboutMe = () => {
  const data = usePortfolioData();

  if (!data) return <div>Loading...</div>;

  return (
    <section id="about">
      <div className="aboutContent">

        <img
          src="/images/profilePhoto.png"
          alt={data.name}
        />

        <p className="sde-tittle">
          <u>{data.myTittle}</u>
        </p>

       
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