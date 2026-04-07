import style from "./MainSection.module.css";
import { groupInfo, members } from "../../../data/data";

const MainSection = () => {
  return (
    <main className={style.mainSection}>
      <section className={style.leftSide}>
        <p className={style.sec}>BSIT - 2A </p>
        <h1 className={style.groupName}>{groupInfo.name}</h1>
        <p className={style.groupTagline}>
          A team building cool projects while exploring the basics of React.
        </p>
      </section>

      <section className={style.rightSide}>
        <figure className={style.memberCount}>0{members.length} Members</figure>
      </section>
    </main>
  );
};

export default MainSection;
