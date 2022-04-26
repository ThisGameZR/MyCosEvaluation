import React from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <>
      <nav className="w-screen h-[5vh] sticky z-40 bg-primary-500 flex">
        <ul className="flex items-center">
          <li className="text-white text-3xl px-4 py-2 cursor-pointer hover:text-secondary-500" onClick={() => setIsOpen(!isOpen)}>
            <VscThreeBars />
          </li>
          <li>
            <Link to="/" className="text-white text-xl px-4 py-2 font-bold cursor-pointer hover:text-secondary-500">
              MYCOS EVALUATION
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
