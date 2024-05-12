import { headerLogo } from "../assets/images";
import { hamburger, closeIcon } from "../assets/icons";
import SwitcherMode from "./SwitcherMode";
import { navLinks } from "../constants";
import { useState } from "react";
//MOTION
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//STATS
const Nav = () => {
  // STATE TO MANAGE THE NAVBAR'S VISIBILITY
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="padding-x py-8 fixed z-20 w-full bg-slate-200 dark:bg-slate-900">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} className="m-0 w-[129px] h-[29px]" />
          </a>
          {/* Navbar Menu */}
          <ul className="flex-1 flex justify-center items-center gap-16 text-slate-600 dark:text-slate-300 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`font-montserrat leading-normal text-lg hover:text-xl hover:text-slate-400 dark:hover:text-slate-500`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <SwitcherMode />

          <div
            className="hidden max-lg:flex justify-center cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}>
            <img
              src={hamburger}
              alt="Hamburger"
              width={20}
              height={20}
              className="dark:bg-slate-400 dark:rounded-sm w-8 h-7"
            />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <>
          <header className="absolute z-20">
            <motion.nav
              variants={fadeIn("left", 0.3)}
              initial={"hidden"}
              animate={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="fixed h-52 w-full lg:hidden bg-slate-200 dark:bg-slate-900">
              <div
                className="max-lg:block fixed right-0 px-4 py-4 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}>
                <img
                  src={closeIcon}
                  alt="close"
                  width={20}
                  height={20}
                  className="dark:bg-slate-400 dark:rounded-sm w-7 h-7"
                />
              </div>
              <motion.ul className="flex flex-col justify-center items-center lg:hidden">
                {navLinks.map((item, i) => (
                  <motion.li
                    variants={fadeIn("left", i * 0.5)}
                    initial={"hidden"}
                    animate={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-400"
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </header>
        </>
      )}
    </>
  );
};

export default Nav;
