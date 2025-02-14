"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Socials from "./Socials";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Company",
      path: "/about",
      dropdown: [
        { name: "About", path: "/about" },
        { name: "Our Leadership", path: "/about/management" },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
      dropdown: [
        { name: "Summary", path: "/projects" },
        { name: "Sewum Gold Project", path: "/projects/sewum-gold-project" },
        // { name: "Gold Standard", path: "/project/gold-standard" },
        // { name: "Keezhik", path: "/project/keezhik" },
        // { name: "Attwood", path: "/project/attwood" },
        // {
        //   name: "North Kimberley Diamond Project",
        //   path: "/project/north-kimberley",
        // },
      ],
    },
    { name: "Investors", path: "/investors" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Contact", path: "/contact" },
  ];

  // Close menu on clicking outside the sidebar
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && target.classList.contains("overlay")) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileMenuOpen]);

  return (
    <nav className="py-2 bg-white font-primary">
      <div className="w-full container mx-auto px-4 sm:px-6 md:px-20 py-3 flex justify-between items-center">
        <Link href="/" className="">
          <img
            src="/images/brl-logo.png"
            alt="Logo"
            className="w-[90px] md:w-[140px]"
          />
        </Link>

        <div className="hidden md:flex flex-col items-end space-y-2">
          <div className="flex flex-row space-x-5 text-black">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.path}
                    className="uppercase text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                  <div className="absolute top-full left-0 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 invisible group-hover:visible z-10 w-max font-medium">
                    {link.dropdown.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.name}
                        href={dropdownLink.path}
                        className="block px-4 py-2 hover:bg-grey uppercase text-sm"
                      >
                        {dropdownLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className="font-medium uppercase text-sm"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>

        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon icon={"line-md:menu"} className="text-2xl" />
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-70 backdrop-blur-md overlay" />

          {/* Sidebar Menu */}
          {/* <div
            className={`fixed top-0 right-0 z-50 h-full w-10/12 py-6 bg-black text-white p-5 transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/images/logo-white.png"
                  width={150}
                  alt="Logo"
                  className="text-white"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl"
              >
                <Icon icon={"line-md:close"} />
              </button>
            </div>

            <div className="space-y-4 mb-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="">
                    <Link
                      href={`${link.path}`}
                      className="text-lg uppercase border-b py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    <div className="space-y-2 mt-2">
                      {link.dropdown.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.name}
                          href={dropdownLink.path}
                          className="block hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="block text-lg border-b py-2 uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
            <Socials color />
          </div> */}
        </>
      )}
    </nav>
  );
};

export default Navbar;
