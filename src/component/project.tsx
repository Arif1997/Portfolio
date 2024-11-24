import "../css/project.css";

const Project = () => {
  return (
    <section className="project__section">
      <div id="my__projects">
        <h1 id="project__header">PROJECTS</h1>
        <ul id="project__list">
          <li>
            <a href="https://entopconstruct.com.au/">
              Entop Construct Private Ltd.
            </a>
          </li>
          <li>
            <a href="https://www.mfkbricklaying.com/">
              MFK Bricklying Private Ltd.
            </a>
          </li>
          <li>
            <a href="https://6701b25e2e1e5f81344095e3--reliable-cat-f6d2fe.netlify.app/">
              Hazara Student Association in India (HSAI)
            </a>
          </li>

          <li>
            <a href="https://quiet-clafoutis-98e909.netlify.app/">
              Learn Data Structure and Algorithm
            </a>
          </li>
          <li>
            <a href="#">Fixed Deposit Rate Tracking System</a>
          </li>

          <li>
            <a href="#">Currency Exchange</a>
          </li>
        </ul>
      </div>
      <img
        id="project__view"
        src="/images/entop-construct.webp"
        alt="Full Stack Developer"
      />
    </section>
  );
};

export default Project;
