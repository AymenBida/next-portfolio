import Image from "next/image";
import Buttons from "./Buttons/Buttons";
import Tags from "./Tags/Tags";

const Project = ({ image, title, description, tags, buttons }) => {
  return (
    <div className="project">
      <div id="tech" className="project__image-wrapper">
        <Image layout="fill" objectFit="cover" className="project__image" src={image} alt="" />
      </div>
      <div className="project__card">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        {tags ? <Tags tags={tags} /> : null}
        {buttons ? <Buttons buttons={buttons} /> : null}
      </div>
    </div>
  );
};

export default Project;
