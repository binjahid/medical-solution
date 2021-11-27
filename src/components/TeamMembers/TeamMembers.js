import React, { useEffect, useState } from "react";
import TeamMember from "../TeamMember/TeamMember";
import "./TeamMembers.css";
const TeamMembers = () => {
  const [members, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("./teammembers.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <div className="container mt-5 align-items-center">
      <p className="team-title">Our Trusted Members</p>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
        {members.map((member) => (
          <TeamMember member={member} key={member.key}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
