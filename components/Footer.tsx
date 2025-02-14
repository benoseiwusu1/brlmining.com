import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: React.FC = () => {
  const importantLinks = [
    { name: "Company", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Investors", path: "/investors" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">
            Popular Links
          </h3>
          <ul className="space-y-2">
            {importantLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-grey-300 hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">Location</h3>
          <address className="not-italic text-grey-300">
            No. 4 Apple Street
            <br />
            <br />
            East Legon
            <br />
            <br />
            Accra, Ghana
          </address>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">Contact</h3>
          <p className="flex items-center gap-2">
            <Icon icon="ic:baseline-phone" />
            +233 302 543 667
          </p>
          <br />
          <a
            href="mailto:info@BRL Miningex.ca"
            className="text-grey-300 hover:text-white transition flex items-center gap-2"
          >
            <Icon icon="ic:baseline-email" />
            info@BRLmining.com
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-grey-400 text-sm">
            ©BRL Mining Exploration Inc. All rights reserved.{" "}
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
