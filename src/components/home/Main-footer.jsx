import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-white py-14 px-8"
      style={{
        background:
          "radial-gradient(circle at 85% 85%, rgba(72,0,255,0.30), rgba(20,0,40,0.15) 30%, rgba(10,0,20,0.1) 55%, #000 90%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile Brand */}
        <div className="lg:hidden mb-12">
          <h2 className="text-3xl font-bold tracking-wide">EIC SAKEC</h2>
          <p className="text-gray-300 leading-relaxed mt-4">
            Fostering innovation and entrepreneurship through events, workshops,
            and initiatives that empower students to turn ideas into impact.
          </p>

          <div className="flex space-x-4 mt-6 cursor-pointer">
            <FooterIcon
              href="https://www.instagram.com/ecellsakec/"
              Icon={Instagram}
              className="cursor-pointer"
            />
            <FooterIcon href="https://x.com/ecellsakec" Icon={Twitter} />
            <FooterIcon
              href="https://www.linkedin.com/company/entrepreneurship-and-innovationcell/posts/?feedView=all"
              Icon={Linkedin}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Desktop Branding */}
          <div className="hidden lg:block space-y-6">
            <h2 className="text-3xl font-bold tracking-wide">EIC SAKEC™</h2>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Fostering innovation and entrepreneurship through events,
              workshops, and initiatives that empower students to turn ideas
              into impact.
            </p>

            <div className="flex space-x-4">
              <FooterIcon
                href="https://www.instagram.com/ecellsakec/"
                Icon={Instagram}
              />
              <FooterIcon href="https://x.com/ecellsakec" Icon={Twitter} />
              <FooterIcon
                href="https://www.linkedin.com/company/entrepreneurship-and-innovationcell/posts/?feedView=all"
                Icon={Linkedin}
              />
            </div>
          </div>

          {/* PAGES */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">Pages</h3>

            <div className="flex flex-col space-y-3 ">
              <FooterTextLink to="/" label="Home" />
              <FooterTextLink to="/events" label="Events" />
              <FooterTextLink to="/newsletters" label="Newsletters" />
              <FooterTextLink to="/team" label="Our Team" />
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="space-y-4 text-gray-300">
              <div>
                <div className="font-medium">SAKEC, near Deonar Depot</div>
                <div>Chembur, Mumbai 400074</div>
              </div>

              <a
                href="mailto:ecell@sakec.ac.in"
                className="flex items-center hover:text-white transition group"
              >
                {/* <Mail
                  size={38}
                  className="mr-3 group-hover:scale-110 duration-200"
                /> */}
                ecell@sakec.ac.in
              </a>

              <a
                href="tel:+917718063429"
                className="flex items-center hover:text-white transition group"
              >
                {/* <Phone
                  size={18}
                  className="mr-3 group-hover:scale-110 duration-200"
                /> */}
                (+91) 77180 63429
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-2 pt-4 border-t border-white/10 text-center text-gray-400 text-sm">
          © 2024 EIC SAKEC™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* Reusable Components */

const FooterIcon = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 
               hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
  >
    <Icon size={20} />
  </a>
);

const FooterTextLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white/90 hover:text-white transition duration-200 text-base underline-hover max-w-max"
  >
    {label}
  </Link>
);
