import { useState } from "react";
import { links } from "../constant";
import { menu, close } from "../assets";
import { instagram, tiktok, youtube } from "../assets";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { right, left } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <main className="fixed h-screen z-50">
      <nav className="nav fixed w-full">
        <section className="hidden md:flex justify-between items-center text-lightest font-black p-2 md:py-2 md:px-10 md:pr-32">
          <motion.div
            variants={left}
            initial="hidden"
            whileInView="visible"
            className="flex justify-evenly items-center"
          >
            <img
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              className="size-10 object-cover"
              src="/logo-fav.png"
              alt="blackstudio logo"
            />

            <ul className="flex gap-3 items-center list-none px-5">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth="true"
                    duration={500}
                    className={`${
                      active === link.title ? "opacity-100" : "opacity-50"
                    } hover:text-white hover:opacity-75 text-[18px] font-medium bebas cursor-pointer`}
                    onClick={() => setActive(link.title)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="hidden md:flex size-5 gap-3 items-center"
          >
            <img
              alt="ig icon"
              className="hover:cursor-pointer"
              src={instagram}
              onClick={() => {
                window.open("https://www.instagram.com/blackstudio.id/");
              }}
            />
            <img
              alt="tiktok icon"
              className="hover:cursor-pointer"
              src={tiktok}
              onClick={() => {
                window.open(
                  "https://www.tiktok.com/@blackstudio.id?is_from_webapp=1&sender_device=pc"
                );
              }}
            />
            <img
              alt="yt icon"
              className="hover:cursor-pointer"
              src={youtube}
              onClick={() => {
                window.open(
                  "https://www.youtube.com/channel/UCguicHpmLVfA21bCKa0ms7A"
                );
              }}
            />
          </motion.div>
        </section>
        <section className="flex items-center justify-between md:hidden nav p-3 w-full">
          <div
            className="flex justify-between items-center w-full
          "
          >
            <img
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              className="size-10 object-cover"
              src="/logo-fav.png"
              alt="blackstudio logo"
            />
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="size-5 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-12 -right-3 z-10 nav flex flex-col justify-center items-start`}
          >
            <div className="flex justify-evenly items-center py-5">
              <ul className="flex flex-col items-start gap-3 list-none px-5 text-white">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth="true"
                      className={`${
                        active === link.title ? "opacity-100" : "opacity-50"
                      } hover:text-white hover:opacity-75 text-[18px] font-medium bebas cursor-pointer`}
                      onClick={() => setActive(link.title)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex size-5 gap-3 items-center">
              <img
                className="hover:cursor-pointer"
                src={instagram}
                onClick={() => {
                  window.open("https://www.instagram.com/blackstudio.id/");
                }}
              />
              <img
                className="hover:cursor-pointer"
                src={tiktok}
                onClick={() => {
                  window.open(
                    "https://www.tiktok.com/@blackstudio.id?is_from_webapp=1&sender_device=pc"
                  );
                }}
              />
              <img
                className="hover:cursor-pointer"
                src={youtube}
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UCguicHpmLVfA21bCKa0ms7A"
                  );
                }}
              />
            </div>
          </div>
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
