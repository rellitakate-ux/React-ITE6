import style from "./About.module.css";
import { groupInfo } from "../../../data/data";

const About = () => {
  return (
    <main id="About" className={style.about}>
      <figure className={style.aboutLabel}>
        <h1 className={style.label}>About Us</h1>
      </figure>
      <section className={style.aboutContent}>
        <h3>Short Description </h3>
        <p>{groupInfo.about}</p>
      </section>
    </main>
  );
};
export default About;
