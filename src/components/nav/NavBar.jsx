import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatedTooltip } from "../ui/shadcn-io/animated-tooltip";
import TextRoll from "../TextRoll";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Optional: close sidebar when a nav link is clicked, for better UX on mobile
  const handleLinkClick = () => setIsSidebarOpen(false);

  return (
    <nav className="h-[8vh] px-9 justify-between text-white flex items-center">
      <div className="flex items-center">
        <img className="h-11" src="/ecell-logo.png" alt="ecell-logo" />
        <h2 className="font-[vampire] hidden sm:block font-bold text-[2vw] ">
          Ecell
        </h2>
      </div>

      <div className="flex items-center  gap-[2vw] ">
        <div
          className={`nav${
            isSidebarOpen ? " show" : ""
          } lg:px-15 py-4 rounded-full flex items-center justify-center relative`}
        >
          <div
            onClick={closeSidebar}
            className="menu-close-btn text-white absolute top-10 right-7"
          >
            <X />
          </div>

          <div className="nav-links   flex  lg:gap-10">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active-page" : "")}
              end
            >
              <h3 className="px-3 rounded">Home</h3>
            </NavLink>

            <NavLink
              to="/events"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              <h3 className="px-3 rounded">Events</h3>
            </NavLink>

            <NavLink
              to="/team"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              <h3 className="px-3 rounded">Team</h3>
            </NavLink>

            <NavLink
              to="/newsletters"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              <h3 className="px-3 rounded">Newsletters</h3>
            </NavLink>
          </div>
        </div>

        <div className="absolute bottom-[-86vh] right-2 md:static">
          <div className=" cursor-target static sponsors-btn flex items-center font-bold h-[8vh] bg-blue-500 px-10 py-4 rounded-full">
            Sponsors
            <div className="flex bg-black px-5 pr-8 py-2 ml-3 -mr-8 rounded-full flex-row items-center justify-center w-full">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>

        <div
          onClick={openSidebar}
          className="bg-gray-900 p-2 rounded menu-open-btn"
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
