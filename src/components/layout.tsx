import React from "react";

import { Footer } from "./footer";
import { Head } from "./head";
import { Header } from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer />
    </>
  );
}
