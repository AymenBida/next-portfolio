import React from "react";
import { FaCode, FaLaptopCode, FaToolbox } from "react-icons/fa";

const iconsMap = {
  code: FaCode,
  laptopCode: FaLaptopCode,
  toolBox: FaToolbox,
};

const Skill = ({ icon, title, items }) => {
  return (
    <div className="skills">
      <div className="skills__image">{React.createElement(iconsMap[icon])}</div>
      <h3 className="skills__title">{title}</h3>
      <ul className="skills__list">
        {items
          ? items.map((item) => (
              <li key={item} className="skills__item">
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Skill;
