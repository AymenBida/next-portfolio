const Tags = ({ tags }) => {
  return (
    <ul className="project__tags">
      {tags
        ? tags.map((tag) => (
            <li key={tag} className="project__tag">
              {tag}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Tags;
