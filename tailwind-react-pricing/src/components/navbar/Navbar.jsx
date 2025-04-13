import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Projects", path: "/projects" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="flex mt-4 justify-between mx-10">
      <span className="flex gap-2" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`md:hidden absolute rounded-lg text-white duration-1000 ${
            open ? "top-8" : "-top-60"
          } bg-red-400 p-2`}
        >
          {links}
        </ul>
        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden gap-4">{links}</ul>
      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
