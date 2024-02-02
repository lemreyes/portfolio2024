import js_logo from "../assets/js_logo.svg";
import ts_logo from "../assets/ts_logo.svg";
import react_logo from "../assets/react_logo.svg";
import next_logo from "../assets/nextjs_logo.svg";
import tailwind_logo from "../assets/tailwindcss_logo.svg";
import prisma_logo from "../assets/prisma_logo.svg";
import git_logo from "../assets/git_logo.svg";
import perforce_logo from "../assets/perforce_logo.svg";
import jira_logo from "../assets/jira_logo.svg";
import confluence_logo from "../assets/confluence_logo.svg";
import c_logo from "../assets/C_logo.svg";
import cpp_logo from "../assets/cpp_logo.svg";

export default function Skills() {
  return (
    <section id="Skills" className="mt-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="playfair text-5xl font-bold leading-[72px]">Skills</h2>
        <div className="h-1 bg-accent -mt-2 w-24">&nbsp;</div>
      </div>

      <ul className="mt-8 grid grid-cols-3 tablet:grid-cols-4 tablet:grid-rows-3 w-7/8 tablet:w-1/2 gap-4">
        <li className="flex flex-col items-center gap-1">
          <div className="w-[100px] h-[100px] flex items-center">
            <img src={js_logo} alt="javascript logo" width={100} height={100} />
          </div>
          <span className="roboto">Javascript</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img src={ts_logo} alt="typescript logo" width={100} height={100} />
          </div>
          <span className="roboto">Typescript</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img src={react_logo} alt="react logo" width={100} height={100} />
          </div>
          <span className="roboto">React</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img src={next_logo} alt="nextjs logo" width={100} height={100} />
          </div>
          <span className="roboto">NextJS</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img
              src={tailwind_logo}
              alt="tailwind css logo"
              width={100}
              height={100}
            />
          </div>

          <span className="roboto">TailwindCSS</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img
              src={prisma_logo}
              alt="prisma orm logo"
              width={100}
              height={100}
            />
          </div>
          <span className="roboto">Prisma</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img src={git_logo} alt="git logo" width={100} height={100} />
          </div>
          <span className="roboto">Git</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img
              src={perforce_logo}
              alt="perforce logo"
              width={100}
              height={100}
            />
          </div>
          <span className="roboto">Perforce</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img src={jira_logo} alt="jira logo" width={100} height={100} />
          </div>
          <span className="roboto">Jira</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex items-center">
            <img
              src={confluence_logo}
              alt="confluence logo"
              width={100}
              height={100}
            />
          </div>
          <span className="roboto">Confluence</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="w-[80px] h-[100px] flex items-center">
            <img src={c_logo} alt="C logo" width={80} height={100} />
          </div>
          <span className="roboto">C</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="h-[100px] flex items-center">
            <img src={cpp_logo} alt="C++ logo" height={100} width={80} />
          </div>
          <span className="roboto">C++</span>
        </li>
      </ul>
    </section>
  );
}
