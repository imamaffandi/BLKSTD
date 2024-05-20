import { desgraph, mograph, photgraph, vigraph } from "../assets/services";
import { brands } from "../assets/brands";
import { SectionWrapper } from "../hoc";
import { dummy } from "../assets";
import Marquee from "react-fast-marquee";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

const Items = () => {
  return (
    <div className="flex">
      {brands.map((brand) => {
        return (
          <div key={brand.index} className="px-5 overflow-x-hidden">
            <LazyLoadImage
              className="size-20 sm:size-32"
              src={brand.icon}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

const About = () => {
  return (
    <>
      {/* Home */}
      <section className="h-screen bg-darkest w-full overflow-hidden flex flex-col justify-center ">
        <LazyLoadImage
          className="absolute right-0 top-10 sm:top-20"
          src="/2.png"
          alt=""
        />
        <motion.div
          variants={down}
          initial="hidden"
          whileInView="visible"
          className="p-2 sm:p-5 w-[70%] sm:w-1/2 mx-10 sm:mx-5 relative glass rounded-md"
        >
          <div className="py-10 text-left">
            <p className="text-2xl sm:text-4xl text-center px-5 py-2 tracking-widest text-brand montserat ">
              CV. KREASI RUMAH HITAM
            </p>
            <p className="text-md px-5 font-thin text-brand text-left poppins ">
              Creative production house established in 2019, based in
              Batu-Malang, East Java.
              <span className="hidden sm:inline">
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
              className="animated-button rounded-lg py-5 px-10 -bottom-10 -right-10 sm:-bottom-10 sm:right-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text bebas text-lg sm:text-xl">Get Started</span>
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
      <main className="bg-darkest flex flex-col sm:flex-row px-10 py-10">
        <motion.section
          variants={right}
          initial="hidden"
          whileInView="visible"
          className="text-white flex flex-col justify-center w-full py-2 sm:p-0 sm:w-1/2 montserat"
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
          className="grid grid-cols-2 gap-1 sm:gap-3"
        >
          {" "}
          <motion.div
            variants={itemDown}
            initial="hidden"
            whileInView="visible"
            className=" glass flex flex-col items-center rounded-md p-10  text-white font-semibold"
          >
            <LazyLoadImage
              className="size-10 sm:size-20"
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
              className="size-10 sm:size-20"
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
              className="size-10 sm:size-20"
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
              className="size-10 sm:size-20"
              alt="graphic motion"
              src={mograph}
            />
            <p>Motion Graphic</p>
          </motion.div>
        </motion.section>
      </main>
      <main className="bg-darkest flex flex-col-reverse sm:flex-row gap-10 items-center p-10 ">
        <motion.section variants={right} initial="hidden" whileInView="visible">
          <img src={dummy} alt="foto" />
        </motion.section>
        <motion.section
          variants={left}
          initial="hidden"
          whileInView="visible"
          className="w-full sm:w-1/2 text-white"
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
      <section className="w-full bg-darkest text-white flex-col sm:flex-row flex p-3">
        {/* <Testimonial /> */}
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
