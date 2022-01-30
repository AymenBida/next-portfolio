import SkillList from "../SkillList/SkillList";

const About = ({ title, text, resume, skills }) => {
  return (
    <div id="about" className="about">
      <h2 className="about__title">{title}</h2>
      <p className="about__text">{text}</p>
      <div className="about__link-container">
        <a
          href={resume.link}
          className="about__link"
          target="_blank"
          rel="noreferrer"
        >
          {resume.text}
        </a>
      </div>
      <SkillList skills={skills} />
    </div>
  );
};

export default About;
