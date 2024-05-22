import { desgraph, mograph, photgraph, vigraph } from "../assets/services";
import { brands } from "../assets/brands";
import { SectionWrapper } from "../hoc";
import { dummy } from "../assets";
import Marquee from "react-fast-marquee";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loadingscreen from "./Loadingscreen";
import Lazyload from "./Lazyload";
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
        <div className="w-full md:w-1/3 p-3 border border-y-0 md:border-y md:border-x-0 h-64 flex flex-col justify-between ">
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
          <p className="poppins font-light text-md">
            &quot;Respect buat mas Dika dan tim. Waktu terbatas tapi tetap total
            menggarap materi yang tingkat kesulitannya lumayan tinggi. Semoga ke
            depan kita bisa collab lagi under a more conducive circumstances.
            Salam dari mas Adrex, Deru dan semua di Chemistry. Semoga rekan2
            ssemuanya selalu dibekali kesehatan dan kesuksesan.&quot;
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
            <div key={brand.index} className="px-5 overflow-x-hidden">
              <LazyLoadImage
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
      {/* Home */}
      <Suspense fallback={<Lazyload />}>
        <section className="h-screen bg-darkest w-full overflow-hidden flex flex-col justify-center ">
          <LazyLoadImage
            className="absolute right-0 top-10 md:top-20"
            src="/2.png"
            placeholderSrc="/2placeholder.png"
            alt="blackstudio logo"
          />
          <motion.div
            variants={down}
            initial="hidden"
            whileInView="visible"
            className="p-2 md:p-5 w-[70%] md:w-1/2 mx-10 md:mx-5 relative glass rounded-md"
          >
            <div className="py-10 text-left">
              <p className="text-2xl md:text-4xl text-center px-5 py-2 tracking-widest text-brand montserat ">
                CV. KREASI RUMAH HITAM
              </p>
              <p className="text-md px-5 font-thin text-brand text-left poppins ">
                Creative production house established in 2019, based in
                Batu-Malang, East Java.
                <span className="hidden md:inline">
                  We combine innovative ideas with exceptional execution to
                  deliver high-quality photography, videography, graphic design,
                  and motion graphics that resonate with your audience.
                </span>
              </p>
            </div>
            <Link to="contact" smooth="true">
              <motion.button
                variants={up}
                initial="hidden"
                whileInView="visible"
                className="animated-button rounded-lg py-5 px-10 -bottom-10 right-10 md:-bottom-10 md:right-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text bebas text-lg md:text-xl">
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
        <main className="bg-darkest flex flex-col md:flex-row px-10 py-10">
          <motion.section
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="text-white flex flex-col justify-center w-full py-2 md:p-0 md:w-1/2 montserat"
          >
            <p className="bebas">Our Services</p>
            <p className="text-6xl bebas font-black py-2">What We Do?</p>
            <p className="rubik w-3/4">
              At BLACKSTUDIO.ID, we spark imagination with fresh ideas and
              translate them into reality with flawless execution. We deliver
              top-tier photography, videography, graphic design, and motion
              graphics that leave a lasting impression on your target audience.
            </p>
          </motion.section>
          <motion.section
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 gap-1 md:gap-3"
          >
            {" "}
            <motion.div
              variants={itemDown}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center rounded-md p-10  text-white font-semibold"
            >
              <LazyLoadImage
                className="size-10 md:size-20"
                alt="videography"
                src={vigraph}
              />
              <p>Videography</p>
            </motion.div>
            <motion.div
              variants={itemLeft}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center rounded-md p-10 text-white font-semibold"
            >
              <LazyLoadImage
                className="size-10 md:size-20"
                alt="photography"
                src={photgraph}
              />
              <p>Photography</p>
            </motion.div>
            <motion.div
              variants={itemRight}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center rounded-md p-10 text-white font-semibold"
            >
              <LazyLoadImage
                className="size-10 md:size-20"
                alt="graphic design"
                src={desgraph}
              />
              <p>Design Graphic</p>
            </motion.div>
            <motion.div
              variants={itemUp}
              initial="hidden"
              whileInView="visible"
              className=" glass flex flex-col items-center rounded-md p-10 text-white font-semibold"
            >
              <LazyLoadImage
                className="size-10 md:size-20"
                alt="graphic motion"
                src={mograph}
              />
              <p>Motion Graphic</p>
            </motion.div>
          </motion.section>
        </main>
        <main className="bg-darkest flex flex-col-reverse md:flex-row gap-10 items-center p-10 ">
          <motion.section
            variants={right}
            initial="hidden"
            whileInView="visible"
          >
            <img src={dummy} alt="foto" />
          </motion.section>
          <motion.section
            variants={left}
            initial="hidden"
            whileInView="visible"
            className="w-full md:w-1/2 text-white"
          >
            <p className="bebas">About Us</p>
            <p className="text-6xl py-2 font-bold bebas uppercase">
              Bringing your vision to life
            </p>
            <p className="montserat">
              We offer a comprehensive suite of services to bring your vision to
              life. From stunning photography and captivating videography to
              impactful graphic design and dynamic motion graphics, we create
              visuals that tell your brand story and connect with your target
              audience.
            </p>
          </motion.section>
        </main>
        <main className="bg-darkest text-white">
          <motion.p
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="px-5 z-20  bebas text-xl"
          >
            Our Clients
          </motion.p>
          <section className="relative overflow-hidden py-10">
            <Marquee speed={100} pauseOnHover="true" className="flex">
              <Items />
            </Marquee>
          </section>
        </main>
        <p className="text-white bebas px-5 text-2xl text-center bg-darkest">
          What they say about us
        </p>
        <section className="w-full bg-darkest text-white flex-col md:flex-row flex p-3">
          <Testimonial />
        </section>
      </Suspense>
    </>
  );
};

export default SectionWrapper(About, "about");
