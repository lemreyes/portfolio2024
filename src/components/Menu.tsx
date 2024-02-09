export default function Menu() {
  return (
    <nav>
      <ul className="tablet:flex tablet:flex-col gap-4 absolute right-0 bg-menuBg px-4 py-2 font-bold text-regular">
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
