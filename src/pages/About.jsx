// import { useRef, useEffect } from "react";
import { desgraph, mograph, photgraph, vigraph } from "../assets/services";
import { brands } from "../assets/brands";
import { SectionWrapper } from "../hoc";
import { dummy } from "../assets";
import { Tilt } from "react-tilt";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
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
            <img className="size-20 sm:size-32" src={brand.icon} alt="" />
          </div>
        );
      })}
    </div>
  );
};
const About = () => {
  const tilting = {
    max: 10,
    perspective: 1000,
    speed: 5000,
    transition: true,
    reset: true,
  };
  return (
    <>
      <svg
        className="absolute bottom-32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#161616"
          fillOpacity="1"
          d="M0,64L30,69.3C60,75,120,85,180,90.7C240,96,300,96,360,112C420,128,480,160,540,186.7C600,213,660,235,720,234.7C780,235,840,213,900,224C960,235,1020,277,1080,256C1140,235,1200,149,1260,106.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000000"
          fillOpacity="1"
          d="M0,288L30,272C60,256,120,224,180,202.7C240,181,300,171,360,165.3C420,160,480,160,540,170.7C600,181,660,203,720,224C780,245,840,267,900,234.7C960,203,1020,117,1080,101.3C1140,85,1200,139,1260,154.7C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1c1c1c"
          fillOpacity="1"
          d="M0,128L30,133.3C60,139,120,149,180,165.3C240,181,300,203,360,181.3C420,160,480,96,540,74.7C600,53,660,75,720,90.7C780,107,840,117,900,112C960,107,1020,85,1080,101.3C1140,117,1200,171,1260,170.7C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      {/* Home */}
      <section className="h-screen bg-darkest w-full overflow-hidden flex flex-col justify-center items-center ">
        <Tilt
          options={tilting}
          className="p-2 sm:p-5 w-[70%] sm:w-1/2 mx-10 sm:mx-5 relative"
          style={{
            boxShadow: "0 48px 60px 0 rgba(2,14,26,.24)",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            variants={down}
            initial="hidden"
            whileInView="visible"
            className="glass p-2 rounded-md  cursor-pointer"
          >
            <div>
              <img className="" src="/blackstudio putih.png" alt="" />
            </div>
            <div>
              <p className="text-2xl sm:text-4xl text-center px-5 font-bold text-brand font-sans bebas ">
                CV KREASI RUMAH HITAM
              </p>
              <p className="text-md px-5 font-thin text-brand text-center montserat ">
                Creative production house established in 2019, based in
                Batu-Malang, East Java.{" "}
                <span className="hidden sm:inline-block">
                  We combine innovative ideas with exceptional execution to
                  deliver high-quality photography, videography, graphic design,
                  and motion graphics that resonate with your audience.
                </span>
              </p>
            </div>
          </motion.div>
        </Tilt>

        <motion.button
          variants={up}
          initial="hidden"
          whileInView="visible"
          className="animated-button py-5 px-10 bottom-32 sm:bottom-10"
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
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
            <img
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
            <img
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
            <img
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
            <img
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
      <section className="w-full bg-darkest text-white flex p-3">
        <div className="flex flex-col px-2 py-10 justify-between items-start w-1/3 border border-r-0 rounded-l-lg bg-slate-950 bg-opacity-50">
          <p className="montserat font-medium">
            &quot;Overall videonya much better than the script. Bagus bangeettt
            dapet emosinya. Good job mas Dika and team!&quot;
          </p>
          <p className="pt-5 bebas tracking-wide text-lg">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col px-2 py-10 justify-between items-start w-1/3 border bg-slate-950 bg-opacity-50">
          <p className="montserat font-medium">
            &quot;Barusan video dipresentasikan, penontonnya dari Asia dan
            Europe, semua terkesan dengan video ini, terima kasih banyak atas
            kerja kerasnya di weekend. Video diminta langsung oleh lukas,
            katanya mau dikasih lihat keluarganya&quot;
          </p>
          <p className="pt-5 bebas tracking-wide text-lg">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col px-2 py-10 justify-between items-start w-1/3 border border-l-0 rounded-r-lg bg-slate-950 bg-opacity-50">
          <p className="montserat font-medium">
            &quot;Respect buat mas Dika dan tim. Waktu terbatas tapi tetap total
            menggarap materi yang tingkat kesulitannya lumayan tinggi. Semoga ke
            depan kita bisa collab lagi under a more conducive circumstances.
            Salam dari mas Adrex, Deru dan semua di Chemistry. Semoga rekan2
            semuanya selalu dibekali kesehatan dan kesuksesan.&quot;
          </p>
          <p className="pt-5 bebas tracking-wide text-lg">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
