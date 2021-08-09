import TeamMember from "../TeamMember/TeamMember";
import styles from "../Team/Team.module.css";
import profilePic from "../../public/images/team-member.jpg";

const Team = () => {
  return (
    <div id="servizi" className={`${styles["team__container"]}`}>
      <h2 className={`${styles["team__title"]}`}>IL TEAM</h2>
      <div className={`${styles["team-members__container"]}`}>
        <TeamMember
          settings={{
            src: profilePic,
            title: "Tizio",
            text: "Lorem ipsum dolor sim amet."
          }}
        />
        <TeamMember
          settings={{
            src: profilePic,
            title: "Caio",
            text: "Lorem ipsum dolor sim amet."
          }}
        />
        <TeamMember
          settings={{
            src: profilePic,
            title: "Sempronio",
            text: "Lorem ipsum dolor sim amet."
          }}
        />
        <TeamMember
          settings={{
            src: profilePic,
            title: "Tiberio",
            text: "Lorem ipsum dolor sim amet."
          }}
        />
      </div>
    </div>
  );
};

export default Team;
