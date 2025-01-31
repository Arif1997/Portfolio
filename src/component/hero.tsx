import { useEffect, useState } from "react";
import "../css/hero.css";

export const Hero = () => {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
  ];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 1000;

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    let timer: number | undefined;
    const fullText = texts[textIndex];
    if (!deleting && index < fullText.length) {
      timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (deleting && index > 0) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (index === fullText.length && !deleting) {
      timer = setTimeout(() => setDeleting(true), pauseTime);
    } else if (index === 0 && deleting) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      const profileTextElement = document.getElementById("profile__text");
      if (profileTextElement) {
        profileTextElement.style.color = getRandomColor();
      }
      timer = setTimeout(() => {}, pauseTime);
    }

    return () => clearTimeout(timer);
  }, [index, deleting, textIndex]);
  return (
    <section id="hero">
      <div id="main__heading">
        <div id="heading">
          <h1>Mhd Arif Fakorizada</h1>
          <p id="profile__text">{text}</p>
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
