import { navLinks } from "../constants";
import { logo } from "../assets/images";
import { useState } from "react";
import { close, menu } from "../assets/icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img src={logo} alt="tesanocottage" width="230" className="z-50" />

      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li key={nav.label} className="mr-10 last:mr-0">
            <a
              href={`#${nav.href}`}
              className="font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>

      {/* smaller screens */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-50"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-cyan-400 absolute w-full h-full bottom-0 py-24 pl-4`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.label}
                className="font-montserrat font-normal cursor-pointer mb-4 last:mb-0 text-lg text-slate-gray hover:text-pomo-red"
              >
                <a href={`#${nav.href}`}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 ${sidebar}`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.label}
                className="font-montserrat font-semibold cursor-pointer last:mr-0 mb-4 text-[16px] text-slate-gray hover:text-pomo-red"
              >
                <a href={`#${nav.href}`}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
