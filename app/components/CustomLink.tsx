import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface LinkProps {
  href: string;
  children: string;
}
const CustomLink = ({ children, href }: LinkProps) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default CustomLink;
