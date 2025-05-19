import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>Email: support@taskmarketplace.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Freelancer Lane, Workville, USA</p>
        </div>

        {/* Terms & Policy */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="link link-hover">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="link link-hover">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/refund" className="link link-hover">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/cookies" className="link link-hover">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com "
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com "
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com "
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com "
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm opacity-70">
        <p>
          &copy; {new Date().getFullYear()} Freelance Task Marketplace. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
