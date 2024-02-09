export default function Menu() {
  return (
    <nav>
      <ul className="tablet:flex tablet:flex-col gap-4 absolute right-0 bg-menuBg px-4 py-2 font-bold text-regular border border-regularText">
        <a href="#Projects">
          <li className="border-b border-b-regularText">Projects</li>
        </a>
        <a href="#Skills">
          <li>Skills</li>
        </a>
      </ul>
    </nav>
  );
}
