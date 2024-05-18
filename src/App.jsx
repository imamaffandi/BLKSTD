// import { Contact, Navbar } from "./components";
import { About, Project, Team } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Contact, Chatbot } from "./components";

const App = () => {
  return (
    <Router>
      <div className="App overflow-hidden">
        <Navbar />
        <Chatbot />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
};

export default App;
