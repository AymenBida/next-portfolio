import Meta from "../components/Meta/Meta";
import Navbar from "../components/Navbar/Navbar";
import Cover from "../components/Cover/Cover";
import SocialList from "../components/SocialList/SocialList";
import ProjectList from "../components/ProjectList/ProjectList";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import {
  cover,
  navItems,
  socialItems,
  projectList,
  projects,
  about,
  skills,
} from "../data/data";

export default function Home() {
  return (
    <>
      <Meta />
      <Navbar navItems={navItems} />
      <div className="main">
        <Cover {...cover}>
          <SocialList socialItems={socialItems} />
        </Cover>
        <ProjectList title={projectList.title} projects={projects} />
        <About skills={skills} {...about} />
      </div>
      <Footer>
        <SocialList socialItems={socialItems} />
      </Footer>
    </>
  );
}
