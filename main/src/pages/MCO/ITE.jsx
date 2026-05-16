import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { members, projects } from "../../data/activitiesData";
import MemberCard from "../../components/containers/MemberCard";
import ProjectCard from "../../components/containers/ProjectCard";

const MCO = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);
  return (
    <main className={`mco-page ${dark ? "dark" : "light"}`}>
      <nav className="nav-bar">
        <Link to="/" className="brand">
          GROUP<span>_03</span>
        </Link>

        <button
          className="theme-toggle"
          onClick={() => setDark((value) => !value)}
        >
          {dark ? "☀ Light" : "◑ Dark"}
        </button>
      </nav>

      <section id="projects" className="mco-section">
        <div className="section-heading-row">
          <div>
            <h2>OUR ACTIVITIES</h2>
          </div>
        </div>
        <div className="mco-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div id="team" className="team-grid">
          {members.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MCO;
