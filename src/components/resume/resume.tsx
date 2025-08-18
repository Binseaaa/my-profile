import parse from "html-react-parser";

// Jsons
import Profiles from "jsons/profiles.json";
// import Experiences from 'jsons/experiences.json';

// Styles
import "./resume.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>
      </div>
    </section>
  );
};

export default Resume;
