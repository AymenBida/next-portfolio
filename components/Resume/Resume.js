import React from "react";

const Resume = ({ resume }) => {
  return (
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
  );
};

export default Resume;
