import SocialItem from "./SocialItem/SocialItem";

const SocialList = ({ socialItems }) => {
  return (
    <ul className="cover__social">
      {socialItems
        ? socialItems.map((item) => (
            <SocialItem key={item.icon} link={item.link} icon={item.icon} />
          ))
        : null}
    </ul>
  );
};

export default SocialList;
