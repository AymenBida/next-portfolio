const Buttons = ({ buttons }) => {
  return (
    <ul className="project__buttons">
      {buttons
        ? buttons.map((button) => (
            <li key={button.text} className="project__button">
              <a
                href={button.link}
                target="_blank"
                className="project__link"
                rel="noreferrer"
              >
                {button.text}
              </a>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Buttons;
