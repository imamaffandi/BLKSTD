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
        <About />
        <Project />
        <Team />
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;
