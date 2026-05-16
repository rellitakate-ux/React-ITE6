import style from "./Navbar.module.css";
import Button from "../../buttons/Button";
import { groupInfo } from "../../../data/data";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <a className={style.navbar_logo} href="#Home">
        {groupInfo.name}
      </a>
      <ul className={style.navbar_links}>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Members">Members</a>
        </li>
      </ul>
      <Button btnName={"dmode"} size="small" />
    </nav>
  );
};

export default Navbar;
