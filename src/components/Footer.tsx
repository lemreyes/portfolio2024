import github_icon from "../assets/github-mark.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import github_icon_hover from "../assets/github-mark_hover.svg";
import linkedin_icon_hover from "../assets/linkedin_icon_hover.svg";
import { useState } from "react";

export default function Footer() {
  const [isHoverGithubIcon, setIsHoverGithubIcon] = useState(false);
  const [isHoverLinkedinIcon, setIsHoverLinkedinIcon] = useState(false);

  const toggleGithubIcon = () => {
    setIsHoverGithubIcon(!isHoverGithubIcon);
  };

  const toggleLinkedinIcon = () => {
    setIsHoverLinkedinIcon(!isHoverLinkedinIcon);
  };

  return (
    <footer className="mt-24 tablet:mt-32 mb-16 flex flex-col items-center">
      <div className="flex flex-row gap-4 items-center justify-center mb-8">
        <a href="https://github.com/lemreyes" target="_blank">
          <img
            src={isHoverGithubIcon ? github_icon_hover : github_icon}
            width={50}
            alt="github icon"
            onMouseEnter={toggleGithubIcon}
            onMouseLeave={toggleGithubIcon}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lemuel-leogene-r-9838b936/"
          target="_blank"
        >
          <img
            src={isHoverLinkedinIcon ? linkedin_icon_hover : linkedin_icon}
            width={50}
            alt="linkedin icon"
            onMouseEnter={toggleLinkedinIcon}
            onMouseLeave={toggleLinkedinIcon}
          />
        </a>
      </div>
      <span className="nunito text-[16px] text-regularText text-center">
        Lemuel Leogene Reyes 2024
      </span>
    </footer>
  );
}
