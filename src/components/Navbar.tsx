import HamburgerMenu from "./HamburgerMenu";
import HoverTextAnimation from "./HoverTextAnimation";

const links = [
  {
    href: "#",
    title: "Services",
  },
  {
    href: "#",
    title: "Projects",
  },
  {
    href: "#",
    title: "About",
  },
  {
    href: "#",
    title: "Contact",
  },
];
const Navbar = () => {
  return (
    <nav className="pt-12 flex justify-between items-center ">
      <div className="logo">[Computer Engineer]</div>
      <ul className="flex gap-3 max-sm:hidden">
        {links.map((link, index) => (
          <li key={index} className="flex items-center gap-1">
            <HoverTextAnimation href={link.href} title={link.title} />
            {index !== links.length - 1 && <span className="span ">,</span>}
          </li>
        ))}
      </ul>

      {/* Hamburger menu  max width <= 640px */}
    <div className="hidden max-sm:block">
      <HamburgerMenu />
    </div>
      
    </nav>
  );
};

export default Navbar;
