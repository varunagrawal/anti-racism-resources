import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}
export function Link(props: LinkProps) {
  return (
    <a href={props.href} rel="noopener noreferrer" target="_blank">
      {props.children}
    </a>
  );
}
