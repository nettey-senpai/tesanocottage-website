import { logo } from "../assets/images";
import { useState } from "react";
import { close, menu } from "../assets/icons";
import { Link } from "react-router-dom";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} ${styles.flexCenter} w-full flex justify-between items-center navbar`}
    >
      <img
        src={logo}
        alt="tesanocottage"
        className="z-50 w-[224px] h-[100px] pr-10 cursor-pointer"
      />

      {/* Navlinks for big screens */}
      <ul className="list-none md:flex hidden justify-end items-centr flex-1">
        <li className="mr-10 last:mr-0">
          <Link
            to="/"
            className="font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
          >
            Home
          </Link>
        </li>
        <li className="mr-10 last:mr-0">
          <Link
            to="/rooms"
            className="font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
          >
            Rooms
          </Link>
        </li>
        <li className="mr-10 last:mr-0">
          <Link
            to="/restaurant"
            className="font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
          >
            Restaurant
          </Link>
        </li>
        <li className="mr-10 last:mr-0">
          <Link
            to="/gallery"
            className="font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
          >
            Gallery
          </Link>
        </li>
        <li className="mr-10 last:mr-0">
          <Link
            to="/events"
            className="font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
          >
            Events
          </Link>
        </li>
        <li className="mr-10 last:mr-0">
          <Link
            to="/contact"
            className="font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* smaller screens */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-50 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-white absolute w-full h-[65%] top-0 bottom-0 py-24 pl-4 origin-top `}
        >
          <ul className="relative list-none flex flex-col gap-4 items-center flex-1 pt-4">
            <li className="font-montserrat font-normal cursor-pointer mb-4 text-lg text-slate-gray hover:text-pomo-red">
              <Link to="/">Home</Link>
            </li>
            <li className="font-montserrat font-normal cursor-pointer mb-4 text-lg text-slate-gray hover:text-pomo-red">
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="font-montserrat font-normal cursor-pointer mb-4 text-lg text-slate-gray hover:text-pomo-red">
              <Link to="/restaurant">Restaurant</Link>
            </li>
            <li className="font-montserrat font-normal cursor-pointer mb-4 text-lg text-slate-gray hover:text-pomo-red">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="font-montserrat font-normal cursor-pointer mb-4 text-lg text-slate-gray hover:text-pomo-red">
              <Link to="/events">Events</Link>
            </li>
            <li className="font-montserrat font-normal cursor-pointer mb-0 text-lg text-slate-gray hover:text-pomo-red">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
