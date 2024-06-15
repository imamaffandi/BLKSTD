import { instadark } from "../assets";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fren } from "../assets";
import { right, left, container, itemUp } from "../utils/motion";
import { team } from "../constant";
const Team = () => {
  return (
    <>
      <main className="w-full flex flex-col py-5">
        <section className="md:h-screen flex flex-col-reverse md:flex-row py-20 px-10 md:p-28">
          <motion.section
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="md:w-1/2"
          >
            <p className="font-black text-md opacity-75 bebas">Our Team</p>
            <p className="font-black text-6xl bebas">
              {" "}
              The Faces Behind the Creative Spark
            </p>
            <p className="montserat">
              We&apos;re a bunch of passionate creatives with a sprinkle of
              quirkiness! Get to know the personalities that fuel
              BLACKSTUDIO.ID. From our detail-oriented photography whiz to our
              laughter-inducing motion graphics guru, we believe a strong team
              culture translates into exceptional creative output.
            </p>
          </motion.section>
          <motion.section
            variants={left}
            initial="hidden"
            whileInView="visible"
          >
            <img loading="lazy" src={fren} alt="our team" />
          </motion.section>
        </section>
        <motion.main
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap gap-10 justify-evenly "
        >
          {team.map((list) => {
            return (
              <motion.section
                key={list.index}
                variants={itemUp}
                initial="hidden"
                whileInView="visible"
                className="relative flex flex-col w-56 "
              >
                <div className="relative overflow-hidden">
                  <img loading="lazy" src={list.image} alt={list.name} />
                </div>
                <main className="flex justify-between px-2">
                  <div className="flex flex-col">
                    <h4 className="bebas text-2xl font-semibold tracking-normal text-blue-gray-900">
                      {list.name}
                    </h4>
                    <p className="block montserat font-sans font-medium text-gray-400">
                      {list.job}
                    </p>
                  </div>
                  <img
                    loading="lazy"
                    src={instadark}
                    className="size-7 self-center hover:cursor-pointer"
                    alt=""
                    onClick={() => {
                      window.open(`${list.instagram}`);
                    }}
                  />
                </main>
              </motion.section>
            );
          })}
        </motion.main>
      </main>
    </>
  );
};

export default SectionWrapper(Team, "team");
