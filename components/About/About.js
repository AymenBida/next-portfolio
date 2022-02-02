import Resume from "../Resume/Resume";
import SkillList from "../SkillList/SkillList";

const About = ({ title, text, resume, skills }) => {
  return (
    <div id="about" className="about">
      <h2 className="about__title">{title}</h2>
      <p className="about__text">{text}</p>
      <Resume resume={resume} />
      <SkillList skills={skills} />
    </div>
  );
};

export default About;
