import Image from "next/image";
import Project from "./Project/Project";

const ProjectList = ({ title, projects }) => {
  return (
    <div id="projects" className="projects">
      <h2 className="projects__title">{title}</h2>
      {projects
        ? projects.map((project) => (
            <Project key={project.title} {...project} />
          ))
        : "No projects found"}
    </div>
  );
};

export default ProjectList;
