const Cover = ({ title, subTitle, description, children }) => {
  return (
    <div className="cover">
      <div className="cover__container">
        <h1 className="cover__title">{title}</h1>
        <h2 className="cover__sub-title">{subTitle}</h2>
        <p className="cover__description">{description}</p>
        {children}
        <a href="#projects" className="cover__action">
          see projects
        </a>
      </div>
    </div>
  );
};

export default Cover;
