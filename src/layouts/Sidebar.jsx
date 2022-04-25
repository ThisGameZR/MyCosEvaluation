import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillQuestionCircle, AiOutlineForm } from "react-icons/ai";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { IoIosNotifications } from "react-icons/io";
import { HiDocumentReport } from "react-icons/hi";

const items = [
  {
    icon: <AiFillHome />,
    title: "Dashboard",
    link: "/",
  },
  {
    icon: <AiFillQuestionCircle />,
    title: "Manage Question",
    link: "/",
  },
  {
    icon: <VscTypeHierarchySub />,
    title: "Manage Hierachy",
    link: "/",
  },
  {
    icon: <IoIosNotifications />,
    title: "Manage Notification",
    link: "/",
  },
  {
    icon: <AiOutlineForm />,
    title: "Manage Form",
    link: "/",
  },
  {
    icon: <HiDocumentReport />,
    title: "Report",
    link: "/",
  },
];

export default function Sidebar({ isOpen }) {
  return (
    <>
      <nav
        style={
          isOpen
            ? {
                transform: "translateX(0)",
                opacity: "1",
              }
            : {
                transform: "translateX(-100%)",
                opacity: 0,
              }
        }
        className="absolute z-50 flex bg-primary-500 h-[95vh] min-w-[300px] w-[15vw] transition-all duration-500 ease-in-out"
      >
        <ul className="flex flex-col px-6 gap-8 py-6">
          {items.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </ul>
      </nav>
    </>
  );
}

function Item({ icon, title, link }) {
  return (
    <li>
      <Link to={link}>
        <div className="flex gap-3 items-center text-white hover:text-secondary-500">
          <span className="text-2xl">{icon}</span>
          <span className="text-lg">{title}</span>
        </div>
      </Link>
    </li>
  );
}
