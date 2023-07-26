import React, { useState, useEffect } from "react";
import { logo, navLinks } from "../constant";
import MenuBar from "../assets/icon-hamburger.svg";
import CloseMenu from "../assets/icon-close.svg";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClickNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    // Event listener to detect window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false); // Reset the nav state when the window width is beyond mobile breakpoint (768px)
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [nav]);

  const handleLinkClick = (url) => {
    setNav(false); // Close the mobile menu after clicking a link
    window.location.href = url;
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
      <div className="hidden md:flex justify-between items-center py-7">
        <div className="cursor-pointer">
          {!nav ? (
            <img src={logo.logodark} alt="Logo Bookmark" />
          ) : (
            <img src={logo.logoLight} alt="Logo Bookmark" />
          )}
        </div>
        <ul className="hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <li className="px-7 nav-item-link text-[18px]" key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
          <button className="btn text-white rounded shadow-md hover:bg-transparent border-2 border-[#ff5f45]">
            Login
          </button>
        </ul>
      </div>

      {/* For Mobile Device */}
      <div className="flex md:hidden justify-between items-center py-7 px-2">
        <div style={{ zIndex: 30 }}>
          <div className="cursor-pointer">
            {!nav ? (
              <img src={logo.logodark} alt="Logo Bookmark" />
            ) : (
              <img src={logo.logoLight} alt="Logo Bookmark" />
            )}
          </div>
        </div>
        {/* Handle click event for menubar  */}
        <div
          onClick={handleClickNav}
          className="flex md:hidden items-center cursor-pointer z-30"
        >
          {!nav ? (
            <img src={MenuBar} alt="Menubar" style={{ zIndex: 30 }} />
          ) : (
            <img src={CloseMenu} alt="Close Bar" style={{ zIndex: 30 }} />
          )}
        </div>
      </div>

      {nav && (
        <div className="md:hidden bg-dark fixed inset-0 z-20 opacity-90 pt-32 px-10">
          <ul className="flex flex-col">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer uppercase text-2xl py-4 text-white text-center  border-b border-1 ${
                  index === navLinks.length - 1
                    ? "border-gray-600"
                    : "border-gray-600"
                }`}
              >
                <button onClick={() => handleLinkClick(item.url)}>
                  {item.title}
                </button>
              </li>
            ))}
            <li className="pt-14">
              <button className="font-semibold border-white border-2 rounded py-3 mx-auto w-full text-white  text-xl uppercase">
                Login
              </button>
            </li>
            <li className="flex items-center justify-center pt-40 gap-8 cursor-pointer">
              <FaFacebookSquare
                size={30}
                className="text-white hover:text-soft-blue duration-300"
              />
              <FaTwitter
                size={30}
                className="text-white hover:text-soft-blue duration-300"
              />
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default NavBar;
