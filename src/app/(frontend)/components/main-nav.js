import Link from "next/link";
import NavDropdown from "./nav-dropdown";

const MainNav = ({ navLinks }) => {
  return (
    <ul className="flex gap-8 text-[#0D0D0D]">
      {navLinks.map((link, index) => {
        if (link.links) {
          return (
            <NavDropdown key={index} name={link.name} links={link.links} />
          );
        } else {
          return (
            <li key={index}>
              <Link
                className="font-waheed text-[20px] hover:text-[#CF7457]"
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default MainNav;
