import { brands } from "../assets/brands";
import { SectionWrapper } from "../hoc";
import { dummy } from "../assets";
import Marquee from "react-fast-marquee";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Loadingscreen from "./Loadingscreen";
import {
  right,
  left,
  up,
  down,
  container,
  itemDown,
  itemUp,
  itemLeft,
  itemRight,
} from "../utils/motion";
import { Suspense } from "react";

const Testimonial = () => {
  return (
    <Suspense fallback={<Loadingscreen />}>
      <main className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/3 p-3 border h-64 rounded-t-md md:rounded-r-none md:rounded-l-md flex flex-col justify-between ">
          <p className="poppins font-light text-md">
            {" "}
            &quot;Overall videonya much better than the script. Bagus bangeettt
            dapet emosinya. Good job mas Dika and team!&quot;
          </p>
          <p className="bebas text-lg tracking-wider">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-3 border h-64 border-y-0 md:border-y md:border-x-0 flex flex-col justify-between ">
          <p className="poppins font-light text-md">
            {" "}
            &quot;Barusan video dipresentasikan, penontonnya dari Asia dan
            Europe, semua terkesan dengan video ini, terima kasih banyak atas
            kerja kerasnya di weekend. Video diminta langsung oleh lukas,
            katanya mau dikasih lihat keluarganya&quot;
          </p>
          <p className="bebas text-lg tracking-wider">Lorem, ipsum dolor.</p>
        </div>
        <div className="w-full md:w-1/3 p-3 border h-64 rounded-b-md md:rounded-l-none md:rounded-r-md flex flex-col justify-between ">
          <p className="poppins font-light text-sm md:text-md">
            &quot;Respect buat mas Dika dan tim. Waktu terbatas tapi tetap total
            menggarap materi yang tingkat kesulitannya lumayan tinggi. Semoga ke
            depan kita bisa collab lagi under a more conducive circumstances.
            Salam dari mas Adrex, Deru dan semua di Chemistry. Semoga rekan2
            semuanya selalu dibekali kesehatan dan kesuksesan.&quot;
          </p>
          <p className="bebas text-lg tracking-wider">Lorem, ipsum.</p>
        </div>
      </main>
    </Suspense>
  );
};
const Items = () => {
  return (
    <Suspense fallback={<Loadingscreen />}>
      <div className="flex">
        {brands.map((brand) => {
          return (
            <div key={brand.index} className="px-5 overflow-x-hidden ">
              <img
                loading="lazy"
                className="size-20 md:size-32"
                src={brand.icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </Suspense>
  );
};

const About = () => {
  return (
    <>
      <Suspense fallback={<Loadingscreen />}>
        {/* Heading */}
        <section className="h-screen  w-full overflow-hidden flex flex-col justify-center ">
          <img
            loading="lazy"
            className="absolute right-0 top-10 md:top-20"
            src="/2.png"
            alt="blackstudio logo"
          />
          <motion.div
            variants={down}
            initial="hidden"
            whileInView="visible"
            className="p-2 md:p-5 w-[70%] md:w-1/2 mx-10 md:mx-5 relative glass rounded-md"
          >
            <div className="py-10 text-left">
              <p className="text-2xl md:text-4xl text-center px-5 py-2 tracking-widest  montserat ">
                CV. KREASI RUMAH HITAM
              </p>
              <p className="text-md px-5 font-light text-left poppins ">
                Creative production house established in 2019, based in
                Batu-Malang, East Java.
                <span className="hidden md:inline">
                  We combine innovative ideas with exceptional execution to
                  deliver high-quality photography, videography, graphic design,
                  and motion graphics.
                </span>
              </p>
            </div>
            <Link to="contact" smooth="true">
              <motion.button
                variants={up}
                initial="hidden"
                whileInView="visible"
                className="animated-button bg-gradient-to-tr from-dark via-mid to-dark text-white rounded-full py-2 px-10 -bottom-5 right-10 md:-bottom-5 md:right-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text bebas text-lg md:text-xl hover:text-black">
                  Get Started
                </span>
                <span className="circle"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </section>
        {/* About */}
        <main className=" flex flex-col md:flex-row px-10 py-10">
          <motion.section
            variants={right}
            initial="hidden"
            whileInView="visible"
            className=" flex flex-col justify-center w-full py-2 md:p-0 md:w-1/2 montserat"
          >
            <p className="bebas">Our Services</p>
            <p className="text-6xl bebas font-black py-2">What We Do?</p>
            <p className="poppins font-light w-3/4">
              At BLACKSTUDIO.ID, we spark imagination with fresh ideas and
              translate them into reality with flawless execution. We deliver
              top-tier photography, videography, graphic design, and motion
              graphics.
            </p>
          </motion.section>
          <motion.section
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 place-self-center gap-1"
          >
            {" "}
            <motion.div
              variants={itemDown}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center justify-center rounded-md size-32 md:size-48 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#7e7e7e"
                className="size-10 md:size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <p>Videography</p>
            </motion.div>
            <motion.div
              variants={itemLeft}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center justify-center rounded-md size-32 md:size-48 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#7e7e7e"
                className="size-10 md:size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <p>Photography</p>
            </motion.div>
            <motion.div
              variants={itemRight}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center justify-center rounded-md size-32 md:size-48  font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#7e7e7e"
                className="size-10 md:size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                />
              </svg>

              <p>Design Graphic</p>
            </motion.div>
            <motion.div
              variants={itemUp}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center justify-center rounded-md size-32 md:size-48  font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#7e7e7e"
                className="size-10 md:size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                />
              </svg>

              <p>Motion Graphic</p>
            </motion.div>
          </motion.section>
        </main>
        <main className=" flex flex-col-reverse md:flex-row gap-10 items-center p-10 ">
          <motion.section
            variants={right}
            initial="hidden"
            whileInView="visible"
          >
            <img loading="lazy" src={dummy} alt="foto" />
          </motion.section>
          <motion.section
            variants={left}
            initial="hidden"
            whileInView="visible"
            className="w-full md:w-1/2 "
          >
            <p className="bebas">About Us</p>
            <p className="text-6xl py-2 font-bold bebas uppercase">
              Bringing your vision to life
            </p>
            <p className="poppins">
              We offer a comprehensive suite of services to bring your vision to
              life. From stunning photography and captivating videography to
              impactful graphic design and dynamic motion graphics, we create
              visuals that tell your brand story and connect with your target
              audience.
            </p>
          </motion.section>
        </main>
        <main className=" ">
          <motion.p
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="px-5 z-20  bebas text-xl"
          >
            Our Clients
          </motion.p>
          <section className="relative overflow-hidden py-10">
            <Marquee
              speed={100}
              pauseOnHover="true"
              className="flex bg-gradient-to-r from-darkest via-mid to-darkest rounded-full cursor-pointer"
            >
              <Items />
            </Marquee>
          </section>
        </main>
        <p className=" bebas px-5 text-2xl text-center ">
          What they say about us
        </p>
        <section className="w-full   flex-col md:flex-row flex p-3">
          <Testimonial />
        </section>
      </Suspense>
    </>
  );
};

export default SectionWrapper(About, "about");
