import { Suspense } from "react";
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
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<Loadingscreen />}>
        <Navbar />
        <Chatbot />
        <div className="z-0">
          <About />
          <Project />
          <Team />
          <Contact />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
