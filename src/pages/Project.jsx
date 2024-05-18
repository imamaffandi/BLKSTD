import { dummy } from "../assets";
import { compro, documentation, motion } from "../constant";
import { SectionWrapper } from "../hoc";
const Project = () => {
  return (
    <>
      {" "}
      <main className="sm:py-5 bg-darkest">
        <section className="px-10 py-20 sm:p-28 w-full sm:w-1/2 text-white h-screen">
          <p className="text-5xl font-black bebas">
            A glimpse into the creative magic we create
          </p>
          <p className="montserat text-sm sm:text-md">
            Discover the stories behind our work. We invite you to explore our
            diverse portfolio, featuring impactful photography, captivating
            videography, stunning graphic design, and dynamic motion graphics.
            Get inspired by how we&apos;ve helped brands elevate their visual
            identity and connect with their target audience.
          </p>
        </section>
        <section className="p-5">
          <p className="text-white bebas pl-10 text-2xl">
            Digital Ads, Film, and Company Profile{" "}
          </p>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {compro.map((list) => {
              return (
                <article
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
                </article>
              );
            })}
          </div>
        </section>
        <section className="p-5">
          <p className="text-white bebas pl-10 text-2xl">
            Event Documentation & Trip Documentation{" "}
          </p>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {documentation.map((list) => {
              return (
                <article
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
                </article>
              );
            })}
          </div>
        </section>
        <section className="p-5">
          <p className="text-white bebas pl-10 text-2xl">
            Event Multimedia & Motion Graphic{" "}
          </p>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {motion.map((list) => {
              return (
                <article
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
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default SectionWrapper(Project, "project");
