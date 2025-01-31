import { Button } from "@mui/material";
import "./App.css";
import { About } from "./component/about";
import { Contact } from "./component/contact";
import { Hero } from "./component/hero";
import Project from "./component/project";
import { Skill } from "./component/skill";
import { Loader } from "./component/loader";
import { useEffect, useState } from "react";
import AnimatedSection from "./component/motion";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
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
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Project />
          </AnimatedSection>
          <AnimatedSection>
            <Skill />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>{" "}
        </div>
      )}
    </>
  );
}

export default App;
