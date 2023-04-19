import { Link } from "@remix-run/react";
import { useState } from "react";
import logo from "~/assets/jpg/DoBu-logo.jpg";
import NavbarLink from "./NavbarLink";
import LoginButtons from "../Buttons/LoginButtons";
import { useOptionalUser } from "~/utils";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useOptionalUser();

  const pageName = useLocation().pathname.replace("/", "");
  console.log({ pageName });

  return (
    <header className=" bg-white  md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/" prefetch="intent">
          <img
            className="h-20  w-auto"
            src={logo}
            alt="Dobu Martial Arts Gym Logo"
          />
        </Link>

        <div className="md:hidden">
          {user ? (
            <LoginButtons loggedin={true}></LoginButtons>
          ) : (
            <LoginButtons loggedin={false}></LoginButtons>
          )}
        </div>

        <div className="md:hidden">
          <button
            className="block text-black hover:text-gray-500 focus:text-black focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d={`${
                  isOpen ? "" : "hidden"
                }  M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z`}
              />

              <path
                fillRule="evenodd"
                d={`${
                  isOpen ? "hidden" : ""
                } M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z`}
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div
          className={`mt-2 px-2 pt-2 pb-4 ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center `}
        >
          <NavbarLink
            url="/about"
            current={pageName === "about" ? true : false}
          >
            About
          </NavbarLink>
          <NavbarLink
            url="/classes"
            current={pageName === "classes" ? true : false}
          >
            Classes
          </NavbarLink>
          <NavbarLink
            url="/disciplines"
            current={pageName === "disciplines" ? true : false}
          >
            Disciplines
          </NavbarLink>
          <NavbarLink url="/kids" current={pageName === "kids" ? true : false}>
            Kids
          </NavbarLink>
          <NavbarLink
            url="/contact"
            current={pageName === "contact" ? true : false}
          >
            Contact
          </NavbarLink>

          <div className="hidden md:ml-4 md:block">
            {user ? (
              <LoginButtons loggedin={true}></LoginButtons>
            ) : (
              <LoginButtons loggedin={false}></LoginButtons>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
