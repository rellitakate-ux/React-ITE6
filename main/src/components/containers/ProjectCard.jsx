import { Link } from "react-router-dom";
import { useState } from "react";
import { members } from "../../data/activitiesData";
import { useInView } from "../../data/useInView";

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      ref={ref}
      to={project.route}
      className={`mco-card ${inView ? "in-view" : ""} ${hovered ? "hovered" : ""}`}
      style={{
        "--accent": project.accent,
        "--delay": `${index * 100}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mco-accent-bar" />

      <div className="mco-content">
        <div className="mco-header">
          <span className="mco-meta">
            ACTIVITY {project.id} — {project.year}
          </span>
          <span className="mco-status">{project.status}</span>
        </div>

        <div className="mco-title">{project.title}</div>
        <div className="mco-subtitle">{project.subtitle}</div>
        <p className="mco-desc">{project.desc}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
