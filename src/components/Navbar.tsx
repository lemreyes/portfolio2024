import { useState } from "react";

import hamburger_icon from "../assets/hamburger_icon.svg";
import Menu from "./Menu";

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const hdlShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <nav>
      <button className="tablet:hidden">
        <img src={hamburger_icon} alt="hamburger icon" onClick={hdlShowMenu} />
      </button>
      {isShowMenu && <Menu />}
      <ul className="hidden tablet:flex tablet:flex-row gap-x-8">
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
