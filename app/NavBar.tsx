import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/" },
  ];

  return (
    <nav className="flex items-center justify-between px-5 h-14 border-b">
      <Link href="/">
        <FaBug />
      </Link>

      <ul className="flex gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
