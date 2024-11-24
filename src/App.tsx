import { Button } from "@mui/material";
import "./App.css";
import { About } from "./component/about";
import { Contact } from "./component/contact";
import { Hero } from "./component/hero";
import Project from "./component/project";
import { Skill } from "./component/skill";

function App() {
  return (
    <>
      <div className="button-container">
        <Button
          sx={{
            backgroundColor: "#0f1d4d",
            color: "white",
            borderRadius: "0 0 10px 10px",
            padding: "10px 40px",
          }}
        >
          <a style={{ color: "inherit" }} href="tel:+4917672837734">
            Call Me
          </a>
        </Button>
      </div>
      <Hero />
      <About />
      <Project />
      <Skill />
      <Contact />
    </>
  );
}

export default App;
