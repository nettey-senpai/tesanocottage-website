import { logo } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => (
  <nav className="w-full flex justify-between items-center navbar">
    <img src={logo} alt="tesanocottage" className="w-[164px] h-[124px]" />

    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav) => (
        <li key={nav.label} className="mr-10 last:mr-0">
          <a
            href={`#${nav.href}`}
            className="font-montserrat font-semibold leading-normal text-lg text-slate-gray hover:text-pomo-red"
          >
            {nav.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
