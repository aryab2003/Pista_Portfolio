//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import WelcomePage from "./Welcome";
function App() {
  return (
    <>
      <WelcomePage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
