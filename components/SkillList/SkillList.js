import Skill from "./Skill/Skill";

const SkillList = ({ skills }) => {
  return (
    <>
      {skills
        ? skills.map((skill) => <Skill key={skill.title} {...skill} />)
        : null}
    </>
  );
};

export default SkillList;
