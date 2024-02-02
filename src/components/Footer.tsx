import github_icon from "../assets/github-mark.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";

export default function Footer() {
  return (
    <footer className="mt-24 tablet:mt-32 mb-16 flex flex-col items-center">
      <div className="flex flex-row gap-4 items-center justify-center mb-8">
        <img src={github_icon} width={30} alt="github icon" />
        <img src={linkedin_icon} width={30} alt="linkedin icon" />
      </div>
      <span className="nunito text-[16px] text-regularText text-center">
        Lemuel Leogene Reyes 2024
      </span>
    </footer>
  );
}
