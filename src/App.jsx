import { Suspense, useState, useEffect } from "react";
import {
  Navbar,
  Contact,
  Chatbot,
  About,
  Project,
  Team,
  Loadingscreen,
} from "./components";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("Theme");
    if (storedTheme === "light__mode") {
      setIsDarkMode(false);
    } else if (storedTheme === "dark__mode") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(prefersDarkMode);
    }
    updateBodyClass(isDarkMode);
  }, []);

  const updateBodyClass = (isDarkMode) => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    updateBodyClass(!isDarkMode);

    localStorage.setItem("Theme", isDarkMode ? "dark__mode" : "light__mode");
  };

  return (
    <main className="overflow-hidden">
      <Suspense fallback={<Loadingscreen />}>
        <Navbar />
        <Chatbot />
        <div
          className={` ${
            isDarkMode ? "bg-darkest text-lightest" : "bg-lightest text-darkest"
          }`}
        >
          <button
            className={`fixed z-50 top-5 md:top-4 right-10 md:right-5 bg-white rounded-full p-1 hover:scale-105 active:scale-95 transition`}
            id="switchmode"
            aria-label="Switch"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000000"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000000"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}{" "}
          </button>
          <About />
          <Project />
          <Team />
          <Contact />
        </div>
      </Suspense>
    </main>
  );
};

export default App;
