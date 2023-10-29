/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import logo from "../assets/Logo-CaseConflict.png";
import Link from "next/link";
import { AuthContext } from "@/Provider/AuthProvider";
import toast from "react-hot-toast";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Demos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Support
        </a>
      </Typography>
      {user && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link href={"dashboard"} className="flex items-center">
            Dashboard
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <nav className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href={"/"}>
            {" "}
            <div>
              <Image src={logo} alt=""></Image>
            </div>
          </Link>

          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {user ? (
              <Button
                fullWidth
                variant="filled"
                size="md"
                className="bg-[#258AFF] text-white hidden md:block"
                onClick={handleLogOut}
              >
                <span>Log Out</span>
              </Button>
            ) : (
              <Link href={"login"}>
                <Button
                  fullWidth
                  variant="filled"
                  size="md"
                  className="bg-[#258AFF] text-white hidden md:block"
                >
                  <span>Get Started For Free</span>
                </Button>
              </Link>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center">
            {user ? (
              <Button
                fullWidth
                variant="filled"
                size="md"
                className="bg-[#258AFF] text-white"
                onClick={handleLogOut}
              >
                <span>Log Out</span>
              </Button>
            ) : (
              <Link href={"login"}>
                <Button
                  fullWidth
                  variant="filled"
                  size="md"
                  className="bg-[#258AFF] text-white"
                >
                  <span>Get Started For Free</span>
                </Button>
              </Link>
            )}
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;
