"use client";
import { Box, Button, Container, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  const { status, data: session } = useSession();

  const currentPath = usePathname();

  return (
    <nav className=" px-5 py-3 border-b">
      <Container>
        <Flex justify="between" align="center">
          <Box className="flex items-center gap-8">
            <Link href="/">
              <FaBug />
            </Link>

            <ul className="flex gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={classNames({
                      "text-zinc-900": link.href === currentPath,
                      "text-zinc-500": link.href !== currentPath,
                      "hover:text-zinc-800 transition-colors font-medium": true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
          <Box>
            {status === "authenticated" && (
              <Button variant="outline">
                <Link href="/api/auth/signout">Sign out</Link>
              </Button>
            )}
            {status === "unauthenticated" && (
              <Button variant="outline">
                <Link href="/api/auth/signin">Login</Link>
              </Button>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
