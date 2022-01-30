import React from "react";
import { FaGithub, FaFacebook, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const iconsMap = {
  github: FaGithub,
  facebook: FaFacebook,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
};

const SocialItem = ({ icon, link }) => {
  return (
    <li className="cover__icon">
      <a className="cover__link" href={link} target="_blank" rel="noreferrer">
        {React.createElement(iconsMap[icon])}
      </a>
    </li>
  );
};

export default SocialItem;
