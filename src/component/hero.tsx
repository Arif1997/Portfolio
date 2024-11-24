import "../css/hero.css";

export const Hero = () => {
  return (
    <section id="hero">
      <div id="main__heading">
        <div id="heading">
          <h1>Mhd Arif Fakorizada</h1>
          <p>Full Stack Developer</p>
        </div>
        <div id="badge__container">
          <button
            className="badge__card"
            onClick={() => {
              document
                .getElementById("contact__section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </button>
          <button
            className="badge__card"
            onClick={() => {
              document
                .getElementById("about__section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See Portfolio
          </button>
        </div>
      </div>
      <img src="/images/portrait_maf.JPG" alt="Arif Fakorizada Photo" />
    </section>
  );
};
