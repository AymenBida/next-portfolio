const SocialItem = ({ link, icon }) => {
  return (
    <li className="cover__icon">
      <a
        href="https://www.linkedin.com/in/aymenbida/"
        target="_blank"
        className="cover__link"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </li>
  );
};

export default SocialItem;
