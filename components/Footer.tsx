import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Top row: columns for address, phone, email, working hours */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Address</h3>
            <address className="not-italic text-grey-300 leading-6">
              No. 4 Apple Street
              <br />
              East Legon, Accra
            </address>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Phone</h3>
            <p className="text-grey-300 flex items-center gap-2">
              <Icon icon="ic:baseline-phone" />
              +233 302 543 667
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Email Us</h3>
            <a
              href="mailto:info@BRLmining.com"
              className="text-grey-300 hover:text-white transition flex items-center gap-2"
            >
              <Icon icon="ic:baseline-email" />
              info@BRLmining.com
            </a>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Working Hours
            </h3>
            <p className="text-grey-300">Monday - Friday: 8AM - 5PM</p>
            <p className="text-grey-300">Saturday - Sunday: Closed</p>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-grey-400 text-sm text-center">
            © 2025 Breakthrough Resources. All rights reserved.{" "}
            <Link href="mailto:info@BRLmining.com" className="hover:text-white">
              Email: info@BRLmining.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
