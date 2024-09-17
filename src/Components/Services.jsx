import "../index.css";
export default function Services() {
  return (
    <div className="services-main" id="Services">
      <div className="head-container">
        <p className="p-bold">my skills</p>
        <h1 className="lg-heading text-black">my expertise</h1>
      </div>
      <div className="services-container">
        <section className="services-flex">
          {" "}
          <div className="services-content services1">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <h1 className="md-heading text-grey">Responsive Design</h1>
            <p>
              Crafting websites that adapt seam lessly to any screen size or
              device.
            </p>
            <br />
            <ul>
              <li>Mobile-first approach</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </div>
          <div className="services-content services2">
            <i className="fa-solid fa-code"></i>
            <h1 className="md-heading text-grey">UX/UI Prototyping</h1>
            <p>Designing interfaces that improve user engagement.</p>
            <br />
            <ul>
              <li>Wireframing and mockups</li>
              <li>User-centered design </li>
            </ul>
          </div>
          <div className="services-content services3">
            <i className="fa-solid fa-crosshairs"></i>
            <h1 className="md-heading text-grey">Custom Development</h1>
            <p>
              Creating web solutions tailored to your specific business needs.
            </p>
            <br />
            <ul>
              <li>Fully customized layouts.</li>
              <li>Scalable code.</li>
            </ul>
          </div>
        </section>
        <section className="services-flex">
          <div className="services-content services4">
            <i className="fa-solid fa-shapes"></i>
            <h1 className="md-heading text-grey">Single Page Apps</h1>
            <p>Fast, dynamic web apps for smooth experiences.</p>
            <br />
            <ul>
              <li>React-based architecture.</li>
              <li>Fast and interactive interfaces.</li>
            </ul>
          </div>
          <div className="services-content services5">
            <i className="fa-solid fa-cart-shopping"></i>
            <h1 className="md-heading text-grey">E-commerce Sites</h1>
            <p>
              Building secure online stores for seamless shopping experiences.
            </p>
            <br />{" "}
            <ul>
              <li>Payment integration</li>
              <li>Custom product pages</li>
            </ul>
          </div>
          <div className="services-content services6">
            <i className="fa-solid fa-laptop-code"></i>
            <h1 className="md-heading text-grey">Web Optimization</h1>
            <p>Enhancing site speed and SEO for better performance.</p>
            <br />{" "}
            <ul>
              <li>Code compression.</li>
              <li>SEO-friendly structure.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
