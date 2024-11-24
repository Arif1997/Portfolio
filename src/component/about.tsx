import "../css/about.css";
import DownloadIcon from "@mui/icons-material/Download";
export const About = () => {
  return (
    <section className="about__section" id="about__section">
      <img src="/images/full-stack1.jpg" alt="Full Stack Developer" />
      <div>
        <h1
          style={{
            color: "white",
            width: "60%",
            padding: "10px",
            fontSize: "2rem",
            borderBottom: "2px solid lightgrey",
          }}
        >
          ABOUT
        </h1>
        <p id="about__me">
          {" "}
          Hi, I'm Arif Fakorizada, a full stack developer using JavaSript based
          in Wiesenburg Germany. Currently I'm a fellow member of Media in
          Cooperation and Transition (MiCT).A passionate web developer with
          expertise in ReactJS, HTML5, CSS3, JavaScript, TypeScript, Node.js
          and, MySQL With a solid understanding of frontend and backend
          technologies, I possess a well-rounded skill set that allows me to
          create dynamic and engaging web applications. My experience in
          translating wireframes and designs into interactive, responsive and,
          highly pixel perfection web pages.
        </p>
        <a
          href="https://drive.google.com/drive/u/0/folders/1ssdKAw_FySEOBhhOjmf4knZqcrCU4zKW"
          id="curriculum__vita"
        >
          <DownloadIcon />
          curriculum vita
        </a>
      </div>
    </section>
  );
};
