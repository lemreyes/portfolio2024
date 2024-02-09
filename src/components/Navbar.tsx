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
      <ul className="hidden tablet:flex tablet:flex-row">
        <a href="#Skills">
          <li className="p-4 hover:bg-primary hover:text-white">Skills</li>
        </a>
        <a href="#Projects">
          <li className="p-4 hover:bg-primary hover:text-white">Projects</li>
        </a>
      </ul>
    </nav>
  );
}
