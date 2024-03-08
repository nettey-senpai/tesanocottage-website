import { logo } from "../assets/images";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header>
    <div className="relative z-20 border-b bg-white">
      <div className="px-6 md:px-12 lg:container md:mx-auto lg:px-6 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-20">
            <Link to="/">
              <img src={logo} alt="TC logo" className="w-32" />
            </Link>
          </div>


          <div className="flex items-center justify-end border-l md:border-l-0">
            {/* Hamburger/nav */}
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              className="peer"
              hidden
            />
            <label
              htmlFor="hamburger"
              className="peer-checked:hamburger md:hidden block relative z-20 p-6 -mr-6 cursor-pointer"
            >
              <div
                aria-hidden="true"
                className="m-auto h-0.5 w-6 rounded bg-slate-800 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                className="m-auto mt-2 h-0.5 w-6 rounded bg-slate-800 transition duration-300"
              ></div>
            </label>

            {/* side nav for smaller screen */}
            <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white shadow-xl transition duration-300 border-r md:border-r-0 md:w-auto lg:static md:shadow-none lg:translate-x-0">
              <div className="flex flex-col h-full md:flex-row justify-between md:items-center">
                {/* Nav links */}
                <ul className="px-6 pt-32 md:px-12 space-y-8 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                  <li>
                    <Link
                      to="/"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rooms"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
                    >
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/events"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
                    >
                      Event
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 font-montserrat font-normal leading-normal text-lg text-slate-gray hover:text-pomo-red"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
