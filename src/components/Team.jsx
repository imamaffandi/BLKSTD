import { LazyLoadImage } from "react-lazy-load-image-component";
import { instagram } from "../assets";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fren } from "../assets";
import { right, left, container, itemUp } from "../utils/motion";
const Team = () => {
  return (
    <>
      <main className="w-full bg-darkest text-light flex flex-col py-5">
        <section className="md:h-screen flex flex-col-reverse md:flex-row py-20 px-10 md:p-28">
          <motion.section
            variants={right}
            initial="hidden"
            whileInView="visible"
            className="md:w-1/2"
          >
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
            <LazyLoadImage src={fren} alt="our team" />
          </motion.section>
        </section>
        <motion.main
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap gap-10 justify-evenly "
        >
          <motion.section
            variants={itemUp}
            initial="hidden"
            whileInView="visible"
            className="relative flex flex-col w-56 "
          >
            <div className="relative overflow-hidden">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </div>
            <main className="flex gap-5">
              <div className="flex flex-col">
                <h4 className="bebas text-2xl font-semibold tracking-normal text-blue-gray-900">
                  Natalie Paisley
                </h4>
                <p className="block montserat font-sans font-medium text-gray-400">
                  CEO / Co-Founder
                </p>
              </div>
              <img
                src={instagram}
                className="size-7 self-center hover:cursor-pointer"
                alt=""
                onClick={() => {
                  window.open("https://www.instagram.com/blackstudio.id/");
                }}
              />
            </main>
          </motion.section>
        </motion.main>
      </main>
    </>
  );
};

export default SectionWrapper(Team, "team");
