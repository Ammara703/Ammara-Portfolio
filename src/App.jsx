import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
// import project_data from "./project_data.jsx";
import Services from "./Components/Services.jsx";
import Acheivements from "./Components/Achievements.jsx";
import Acheivements_data from "./Achievements_data.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const achievements = Acheivements_data.map((item) => {
    return (
      <Acheivements
        key={item.id}
        id={item.id}
        img={item.img}
        h1={item.h1}
        p={item.p}
      />
    );
  });

  return (
    <>
      <Header />
      <Projects />
      <About />
      <Services />
      {/*---------------- Achievements------------------- */}
      <div id="Achievements">
        <div className="head-container ">
          <p className="p-bold">my achievements</p>
          <h1 className="lg-heading">My Certificates</h1>
        </div>

        <div className="showcase-section">
          <Slider
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            arrows={true}
          >
            {achievements}
          </Slider>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
