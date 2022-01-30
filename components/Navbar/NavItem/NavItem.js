const NavItem = ({ link, text }) => {
  return (
    <li className="navbar__item">
      <a href={link} className="navbar__link">
        {text}
      </a>
    </li>
  );
};

export default NavItem;
