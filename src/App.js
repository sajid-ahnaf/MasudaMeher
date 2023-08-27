import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/AboutMe/About";
import Services from "./components/Service/Services";
import Resume from "./components/Resume/Resume";
import ProjectWork from "./components/Project/Project";
import Blog from "./components/Blog/Blog";
import Contact from "./components/ContactMe/Contact";
import { BrowserRouter as Routex, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Achievements from "./components/Resume/Achievement/Achievements";
import Education from "./components/Resume/Education/Education";
import Internship from "./components/Resume/Internship/Internship";
import Skills from "./components/Resume/Skills/Skills";

function App() {
  return (
    <Routex>
      <div className="App">
        <Navbar />
        <Home />
        <Services />
        <About />
        <Resume />
        <ProjectWork />
        <Blog />
        <Contact />
        <Footer />
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={ProjectWork} />
        <Route path="/blogs" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/achievement" component={Achievements} />
        <Route path="/education" component={Education} />
        <Route path="/internship" component={Internship} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </Routex>
  );
}

export default App;
