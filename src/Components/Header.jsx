import "../index.css";
export default function Header() {
  return (
    <div className=" text-grey header">
      <nav>
        <p>
          <a href="#Home">&lt;ammara aslam/&gt;</a>
        </p>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Achievements">Achievements</a>
          </li>
        </ul>
        <a href="#Contact" className="nav-button">
          <button className="btn1 btn6 text-purple">Contact Me</button>
        </a>
      </nav>
      <main>
        <div className="hero_section " id="Home">
          <div className="hero-content">
            <p className="p-bold">Hi, I&apos;m Ammara.</p>
            <h1 className="lg-heading">
              I create <span className="text-purple">web solutions</span> <br />
              that elevate experience
            </h1>
            <p className="md_heading">
              Transforming ideas into visually stunning, high-performance
              websites with creativity and expertise.
            </p>
            <div className="btn5-div">
              <a href="#" className="btn1 btn5">
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
