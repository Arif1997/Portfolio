import "../css/skill.css";
import FullWidthGrid from "./skill__list";
export const Skill = () => {
  return (
    <>
      <div className="video-background-container">
        <video autoPlay muted loop playsInline className="background-video">
          <source
            src="/videos/Typing Code - 4K Video - Free Stock Video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="content-overlay">
          <h1 style={{ margin: "40px" }}>SKILLS</h1>
          <FullWidthGrid />
        </div>
      </div>
    </>
  );
};
