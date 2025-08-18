/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProgressBar } from "react-bootstrap";

// Types
import { ISkill } from "types/common";

// Jsons
import SkillsData from "jsons/skills.json";

// Styles
import "./skills.scss";

const Skills = () => {
  const techs1: any[] = SkillsData.techs_1;
  const techs2: any[] = SkillsData.techs_2;

  const RenderSkills = (skills: ISkill[]) => {
    return skills.map((skill, index) => (
      <div key={index} className="progress">
        <span className="skill">
          {skill.name} <i className="val">{skill.rate}%</i>
        </span>
        <div className="progress-bar-wrap">
          <ProgressBar
            variant="success"
            now={skill.rate}
            label={`${skill.rate}%`}
          />
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2 className="animate-fade-in-up">Skills</h2>
        </div>
        <div
          className="row skills-content animate-fade-in"
          style={{ animationDelay: "120ms" }}
        >
          <div className="col-lg-6">{RenderSkills(techs1)}</div>
          <div className="col-lg-6">{RenderSkills(techs2)}</div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fade-in-up { from { opacity: 0; transform: translate3d(0, 8px, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) } }
        @keyframes grow-in { from { transform: scaleX(0); opacity: .5 } to { transform: scaleX(1); opacity: 1 } }
        .animate-fade-in { animation: fade-in .6s both; }
        .animate-fade-in-up { animation: fade-in-up .6s ease-out both; }
        .animate-grow-in { transform-origin: center; animation: grow-in .6s ease-out both; }
      `}</style>
    </section>
  );
};

export default Skills;
