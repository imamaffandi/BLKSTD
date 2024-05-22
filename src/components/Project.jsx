import { dummysvg } from "../assets";
import { compro, documentation, mograph } from "../constant";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { container, itemUp, right, left } from "../utils/motion";
const Project = () => {
  return (
    <>
      {" "}
      <main className="md:py-5 bg-darkest">
        <div className="flex flex-col md:flex-row h-screen">
          <motion.section
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="px-10 pt-10 md:p-28 w-full  md:w-1/2 text-white"
          >
            <p className="text-5xl font-black bebas">
              A glimpse into the creative magic we create
            </p>
            <p className="montserat text-md md:text-md">
              Discover the stories behind our work. We invite you to explore our
              diverse portfolio, featuring impactful photography, captivating
              videography, stunning graphic design, and dynamic motion graphics.
              Get inspired by how we&apos;ve helped brands elevate their visual
              identity and connect with their target audience.
            </p>
          </motion.section>
          <motion.section
            variants={left}
            initial="hidden"
            whileInView="visible"
            className="px-10 md:p-28 w-full md:w-1/2 text-white"
          >
            <img src={dummysvg} alt="" />
          </motion.section>
        </div>
        <section className="p-5">
          <motion.p
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="text-white bebas pl-10 text-2xl"
          >
            Digital Ads, Film, and Company Profile{" "}
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {compro.map((list) => {
              return (
                <motion.article
                  variants={itemUp}
                  initial="hidden"
                  whileInView="visible"
                  key={list.index}
                  onClick={() => {
                    window.open(`${list.link}`, "_blank");
                  }}
                  className="relative cursor-pointer flex flex-col justify-end pt-40 pb-4 overflow-hidden bg-black md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50"
                >
                  <img
                    src={list.image}
                    alt={list.title}
                    className="absolute inset-0 object-cover w-full h-full -z-10 hover:scale-110 transition
                    "
                  />
                  <p className="p-3 absolute bottom-0 text-lg w-full bg-gradient-to-t from-black font-semibold leading-6 text-white hover:text-light">
                    {list.title}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>
        <section className="p-5">
          <motion.p
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="text-white bebas pl-10 text-2xl"
          >
            Event Documentation & Trip Documentation{" "}
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {documentation.map((list) => {
              return (
                <motion.article
                  variants={itemUp}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => {
                    window.open(`${list.link}`, "_blank");
                  }}
                  key={list.index}
                  className="relative cursor-pointer flex flex-col justify-end pt-40 pb-4 overflow-hidden bg-black md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50"
                >
                  <img
                    src={list.image}
                    alt={list.title}
                    className="absolute inset-0 object-cover w-full h-full -z-10 hover:scale-110 transition
                    "
                  />
                  <p className="p-3 absolute bottom-0 text-lg w-full bg-gradient-to-t from-black font-semibold leading-6 text-white hover:text-light">
                    {list.title}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>
        <section className="p-5">
          <motion.p
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="text-white bebas pl-10 text-2xl"
          >
            Event Multimedia & Motion Graphic{" "}
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {mograph.map((list) => {
              return (
                <motion.article
                  variants={itemUp}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => {
                    window.open(`${list.link}`, "_blank");
                  }}
                  key={list.index}
                  className="relative cursor-pointer flex flex-col justify-end pt-40 pb-4 overflow-hidden bg-black md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50"
                >
                  <img
                    src={list.image}
                    alt={list.title}
                    className="absolute inset-0 object-cover w-full h-full -z-10 hover:scale-110 transition
                    "
                  />
                  <p className="p-3 absolute bottom-0 text-lg w-full bg-gradient-to-t from-black font-semibold leading-6 text-white hover:text-light">
                    {list.title}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default SectionWrapper(Project, "project");
