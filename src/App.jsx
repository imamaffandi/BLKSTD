import { Navbar, Contact, Chatbot, About, Project, Team } from "./components";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Chatbot />
      <About />
      <Project />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
