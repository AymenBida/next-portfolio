import NavItem from "./NavItem/NavItem";

const Navbar = ({ navItems }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        {navItems
          ? navItems.map((item) => (
              <NavItem key={item.text} link={item.link} text={item.text} />
            ))
          : null}
      </ul>
    </nav>
  );
};

export default Navbar;
