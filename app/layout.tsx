"use strict";
"use client";

import React from "react";
// import "./globals.css";
// import type { Metadata } from "next";
import { Providers } from "./Providers";
import { Footer, Navbar } from "./components";

const metadata = {
  title: "Car hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
