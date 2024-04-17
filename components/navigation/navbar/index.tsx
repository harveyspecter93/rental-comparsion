import React from "react";
import Logo from "./Logo";
import Button from "@/components/Button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <header className="w-full h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white sticky top-0 shadow-lg">
      <div className="container mx-auto px-4 h-full">
        <nav className="flex justify-between items-center h-full">
          <Logo />
          <button
            className="md:hidden flex items-center p-2"
            onClick={toggle}
            aria-label="Open Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="#FFFFFF"/>
            </svg>
          </button>
          <ul className="hidden md:flex items-center gap-x-20">
            <li>
                <Button onClick={() => {
                  window.location.href = "/utility-analysis";
                }}>
                  Nutzwertanalyse
                </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
