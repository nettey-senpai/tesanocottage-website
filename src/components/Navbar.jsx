import { navLinks } from "../constants";
import { logo } from "../assets/images";
import { useState } from "react";
import { close, menu } from "../assets/icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img src={logo} alt="tesanocottage" className="w-[164px] h-[124px]" />

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
      {/* <div className="md:hidden flex flex-1 justify-end items-center">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        <div className="fixed insert-0 w-[calc(100%-4.5rem)] translate-x-[-100] transition duration-300 bg-white border-r md:border-l-0 md:w-auto md:static md:shadow-none md:translate-x-0"></div>

      </button>

      </div> */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 insert-0 w-[calc(100%-4.5rem)] translate-x-[-100] transition duration-300 bg-white border-r md:border-l-0 md:w-auto md:static md:shadow-none md:translate-x-0 fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
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
      </div>
    </nav>
  );
};

export default Navbar;
