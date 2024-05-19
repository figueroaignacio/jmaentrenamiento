// React
import { useState } from "react";

// Components
import { Wordmark } from "./Wordmark";

// Icons
import { Close } from "../icons/Close";
import { Menu } from "../icons/Menu";

// Config
import { navigation } from "../config/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex border-b-[.0625rem] border-border px-5 lg:px-10 py-3 bg-background justify-between">
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <Menu />
        </button>
      </div>
      <Wordmark />
      <nav className="hidden md:flex items-center">
        <ul className="flex items-center">
          {navigation.map((navItem, index) => (
            <li key={index} className="mr-6">
              <a href={navItem.href}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-10"
          onClick={toggleMenu}
        ></div>
      )}
      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } opacity-100 fixed md:hidden top-0 h-screen w-64 z-20 transition-all duration-300 ease-in-out bg-background`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <Close />
          </button>
        </div>
        <ul className="flex flex-col items-start p-8">
          {navigation.map((navItem, index) => (
            <li key={index} className="my-4" onClick={toggleMenu}>
              <a href={navItem.href}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
