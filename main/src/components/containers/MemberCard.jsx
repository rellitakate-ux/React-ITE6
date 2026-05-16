import { useState } from "react";
import { useInView } from "../../data/useInView";

const MemberCard = ({ member, index }) => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`member-card ${inView ? "in-view" : ""} ${hovered ? "hovered" : ""}`}
      style={{
        "--member-color": member.color,
        "--delay": `${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="member-name">{member.name}</div>
      <div className="member-role">{member.role}</div>
    </div>
  );
};

export default MemberCard;
