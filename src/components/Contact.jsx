import { useState } from "react";
import { phone, location, mail } from "../assets";
import { Link } from "react-scroll";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://wa.me/628113577793?text=Perkenalkan nama saya ${name},dengan Email: ${email}, ${message}`;
    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <main className="relative md:h-screen contact " id="contact">
      <div className="bg-white md:bg-transparent md:absolute left-10 bottom-32 text-white">
        <p className="bebas text-md opacity-75">CONTACT US</p>
        <p className="bebas  text-6xl">Let's get in touch</p>
      </div>
      <section className=" md:absolute md:top-10 md:right-10">
        <div
          className="text-md text-black flex flex-col gap-2.5 px-6 py-8 bg-white
  "
        >
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-0.5">
              <label
                className="block text-[#1b1b1e] font-extrabold text-xs mb-[5px];
  "
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full text-black bg-transparent border px-4 py-3 border-solid border-black;
                  "
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                className="block text-[#1b1b1e] font-extrabold text-xs mb-[5px];
  "
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full text-[black] bg-transparent border px-4 py-3 border-solid border-black;
                  "
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                className="block text-[#1b1b1e] font-extrabold text-xs mb-[5px];
  "
                htmlFor="message"
              >
                How Can We Help You?
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-none text-[black] h-24 border bg-transparent px-4 py-3 border-solid border-[#1b1b1b];
                  "
                rows="10"
                cols="50"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              >
                {" "}
              </textarea>
            </div>
            <button
              className="flex items-start justify-center self-start text-[black] font-black w-2/5  text-[inherit] gap-2 cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] border shadow-[0_0_0_0_black] mt-2 px-4 py-3 border-solid border-[black] hover:-translate-y-0.5 hover:-translate-x-px hover:shadow-[1px_3px_0_0_black] active:translate-y-px active:translate-x-[0.5px] active:shadow-[0_0_0_0_black];
  "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <main className="p-3 bg-darkest text-white w-full bottom-0 md:absolute  ">
        <div className=" flex flex-col md:flex-row md:items-center gap-2 justify-around">
          <section>
            <img
              loading="lazy"
              className="size-10"
              src="/logo-fav.png"
              alt="logo blackstudio"
            />
          </section>
          <section>
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                className="size-5"
                src={location}
                alt="location icon"
              />
              <a
                href="https://www.google.com/maps/place/blackstudio.id/@6.8399707,83.3252569,5z/data=!4m6!3m5!1s0x2e788770ae61f63f:0x528f9e856f2ac2af!8m2!3d-7.8743799!4d112.5126909!16s%2Fg%2F11h52zv_8x?entry=ttu"
                target="_blank"
              >
                Main Office | Kota Batu, Malang, Jawa timur
              </a>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                className="size-5"
                src={mail}
                alt="mail icon"
              />
              <p>blackstudio.id@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                className="size-5"
                src={phone}
                alt="phone icon"
              />
              <p>+628113577793</p>
            </div>
          </section>
          <section>
            <Link to="about" smooth="true">
              <button className="btt-btn flex gap-2 items-center">
                <div className="bebas text-xl">Back to Top</div>
                <svg
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </Link>
          </section>
        </div>
        <div className="text-white font-sans font-thin opacity-50">
          <p className="w-full text-center pt-1">BLACKSTUDIO.ID&copy;2024</p>
        </div>
      </main>
    </main>
  );
};

export default Contact;
