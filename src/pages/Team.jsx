import { instagram } from "../assets";
import { SectionWrapper } from "../hoc";
const Team = () => {
  return (
    <>
      <main className="bg-darkest text-light flex flex-col inset-5 py-5">
        <section className="w-full py-20 px-10 sm:w-1/2 sm:p-28">
          <p className="font-black text-6xl bebas">
            {" "}
            The Faces Behind the Creative Spark
          </p>
          <p className="montserat">
            We&apos;re a bunch of passionate creatives with a sprinkle of
            quirkiness! Get to know the personalities that fuel BLACKSTUDIO.ID.
            From our detail-oriented photography whiz to our laughter-inducing
            motion graphics guru, we believe a strong team culture translates
            into exceptional creative output.
          </p>
        </section>
        <main className="flex flex-wrap gap-10 justify-evenly ">
          <section className="relative flex flex-col w-56 ">
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
          </section>
        </main>
      </main>
    </>
  );
};

export default SectionWrapper(Team, "team");
